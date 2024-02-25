/**
 * Script che crea il file delle informazioni dei Campioni usato dal progetto("champions.json")
 * su base di due file pre-esistenti ("championsFull.json", "champInfoPlus.json")
 * e realizza il file TypeScript ("AllImagesChamps.tsx") per i require delle immagini dei campioni usate nel progetto
 * 
 * @author Giarolo Mattia, Tinazzi Camillo
 * @version 1.2.0
 * Comando da utilizzare a livello del progetto per eseguire lo script:
 *  node .\champsInfoForProgrammer\GetExtraFiles.js
 *  o
 *  npm run make-champInfo
 */

/**
 * Import delle Librerie
 */
const fs = require("fs");

/**
 * Costante del file usato dallo script per ricavare le informazioni generali sui Campioni
 */
const URL_champsInfo = "./champsInfoForProgrammer/championsFull.json";
/**
 * Costante del file usato dallo script per ricavare le informazioni per la modalità Classic sui Campioni
 */
const URL_champInfoPlus = "./champsInfoForProgrammer/champInfoPlus.json";
/**
 * Costante del file usato dal progetto per ricavare le informazioni sui Campioni; usata dallo script per scriverci l'unione delle informazioni importanti per il progetto
 */
const URL_champs = "./assets/champions.json"
/**
 * Costante del file usato dallo script per scrivere i "require(percorso)" alle immagini dei Campioni usati per renderizzare le immagini nel progetto
 */
const URL_AllRequire = "./src/AllImagesChamps.tsx";

/**
 * Funzione che crea una lista con le informazioni ritenute importanti per il progetto per ogni Campione e scrive questa lista sul file "champions.json"
 * @param {*} listChamps lista dei Campioni con le informazioni generali
 * @param {*} listMoreInfo lista dei Campioni con le informazioni per la modalità Classic
 * @returns la lista dei Campioni con le informazioni importanti per il progetto
 */
const writeChamps = async (listChamps, listMoreInfo) => {
    /** Lista dei campioni con tutte le informazioni importanti */
    const championsFull = listChamps.map(champ => {
        /** Lista delle skin che possiede questo Campioni */
        const skins = champ.skins.map((skin, index) => ({
            cardinal: index,
            id: skin.id,
            num: skin.num,
            name: skin.name,
        }));
        /** Lista delle abilità(compresa la passiva) che possiede questo Campioni */
        const abilities = [
            {
                name: champ.passive.name,
                description: champ.passive.description.replace("<br>", "\n"),   // si sostituiscono i possibili ritorno a capo in linguaggio HTML con quello stringa
                image: champ.passive.image.full.split(".")[0],  // si prende solo il nome dell'immagine non la possibile estensione del file
            },
            ...champ.spells.map(spell => {
                return ({
                    id: spell.id,
                    name: spell.name,
                    description: spell.description.replace("<br>", "\n"),   // si sostituiscono i possibili ritorno a capo in linguaggio HTML con quello stringa
                    image: spell.image.full.split(".")[0]   // si prende solo il nome dell'immagine non la possibile estensione del file
                });
            }
            )
        ];
        // Restituisce il Campione con le sole informazione ritenute necessarie e quelle aggiunte dall'altra lista fornita
        return {
            id: champ.id,
            key: champ.key,
            name: champ.name,
            title: champ.title,
            image: champ.image.full.split(".")[0],  // si prende solo il nome dell'immagine non la possibile estensione del file
            skins: skins,
            lore: champ.lore,
            abilities: abilities,
            gender: listMoreInfo[champ.id]?.gender ?? "Informazioni Non Fornite",
            positions: listMoreInfo[champ.id]?.positions ?? ["Informazioni Non Fornite"],
            species: listMoreInfo[champ.id]?.species ?? ["Informazioni Non Fornite"],
            resource: listMoreInfo[champ.id]?.resource ?? "Informazioni Non Fornite",
            range_types: listMoreInfo[champ.id]?.range_types ?? ["Informazioni Non Fornite"],
            regions: listMoreInfo[champ.id]?.regions ?? ["Informazioni Non Fornite"],
            release: listMoreInfo[champ.id]?.release ?? 0,
        };
    });
    // Ritorno della lista quando la scrittura nel file di questa è avvenuta
    await fs.writeFileSync(URL_champs, JSON.stringify(championsFull, null, 4));
    return championsFull;
};
/**
 * Funzione che dà inizio alla lettura e scrittura dei file "*.json" sui campioni
 * @returns la lista dei Campioni con le informazioni importanti per il progetto
 */
const makeChampionsJSON = async () => {
    try {
        // Lettura dei file contenente le informazioni sui Campioni
        const [champsFile, champsPlusFile] = await Promise.all([
            fs.promises.readFile(URL_champsInfo, "utf-8"),
            fs.promises.readFile(URL_champInfoPlus, "utf-8"),
        ]);
        // Addattamento delle informazioni
        /** Lista delle informazioni generali sui Campioni */
        const champions = Object.values(JSON.parse(champsFile).data);   // Del file "championsFull.json" ci è di interesse solo il contenuto dell'attributo "data"
        /** Lista delle informazioni utili per la modalità Classic sui Campioni */
        const championsPlus = JSON.parse(champsPlusFile);   // Il file "champInfoPlus.json" ci interessa nel complesso
        // Scrittura sincrona delle informazioni utili dei Campioni sul file "champions.json" e salvataggio della nuova lista di informazioni
        const championsFull = await writeChamps(champions, championsPlus);
        // Ritorno della lista precedentemente salvata
        return championsFull;
    } catch (error) {
        console.error("Errore nella lettura/scrittura dei file:\nErrore Specifico:\n" + error);
        throw error;
    }
};
/**
 * Procedura per la realizzazione dei file TypeScript usato dal progetto per il rendering di tutte le immagini
 * 
 * crea un file Typescript che contiene un oggetto contenente per ciascun campione i require alle sue immagini
 * Struttura del tipo:
 *  Campione.id: {
 *      icon: require(`../${URL_champIcone}${Campione.image}.png`),
 *      skins: [
 *          require(`../${URL_champSkins}${Campione.image}_${Campione.skins[0].num}.jpg`),
 *          ...
 *      ],
 *      abilities: {
 *          "ability name": require(`../${URL_champSpells}${Campione.abilities[0].image}.png`),
 *          ...
 *      }
 *  }, ...
 * @param champions lista contenente i Campioni con tutte le loro informazioni
 */
const makeAllImagesRequire = (champions) => {
    if (!champions) {
        console.error("Invalid champs array: " + champions);
        return;
    }
    // Creazione della stringa corrispondende al file TypeScript da scrivere
    let fileContent =
        `/**
 * File TypeScript usato per contenere
 *  Oggetto che contiene tutti i require necessari per reinderizzare le immagini corrispondenti ai Campioni
 *
 * @author Giarolo Mattia, Tinazzi Camillo
 * @version 1.0.0
 */

/**Costante del percorso alle immagini*/
const URL_IMAGES = "assets/images/";
/**Costante del percorso alle immagini dei campioni*/
const URL_champsImg = URL_IMAGES+"champions/";
/**Costante del percorso alle immagini delle icone dei campioni*/
const URL_champsIcon = URL_champsImg+"icone/";
/**Costante del percorso alle immagini delle abilità dei campioni*/
const URL_champsSpells = URL_champsImg+"spells/";
/**Costante del percorso alle immagini delle skin dei campioni*/
const URL_champsSkins = URL_champsImg+"skins/";
/**
 * Oggetto che contiene tutti i require alle immagini dei campioni
 * 
 * Con struttura del tipo:
 *  Campione.id: {
 *      icon: require(PathImgIcona),
 *      skins: [require(PathImgSkin[0]), ...],
 *      ability: [require(PathImgAbility[0]), ...],
 *  }
 */
const AllImages = {\n`;
    // Scrittura dei require per ciascuna immagine che possiede un Campione
    champions.forEach(champion => {
        fileContent +=
            `\t${champion.id}: {
        icon: require("../"+URL_champsIcon+"${champion.image}.webp"),
        skins: [ 
            ${champion.skins.map(skin => {
                return `require("../"+URL_champsSkins+"${champion.image}_${skin.num}.webp")`
            }).join(",\n\t\t\t")}
        ],
        abilities: {
            ${champion.abilities.map(ability => {
                return `"${ability.name}": require("../"+URL_champsSpells+"${ability.image}.webp")`
            }).join(",\n\t\t\t")}
        },
    },\n`;
    });
    // Aggiunta dell'ultima parte della stringa
    fileContent += `};\n\nexport {AllImages};`;
    // Scrittura della stringa nel file "AllImagesChamps.tsx"
    fs.writeFileSync(URL_AllRequire, fileContent, "utf-8");
}

/**
 * Procedura principale dello script 
 */
async function main() {
    // Realizzazione della lista delle informazioni utili e scrittura di questa del file usato dal progetto
    const champions = await makeChampionsJSON();
    // Scrittura di tutte le require delle immagini dei campioni
    makeAllImagesRequire(champions);
}

// Avvio dello Script
main();
