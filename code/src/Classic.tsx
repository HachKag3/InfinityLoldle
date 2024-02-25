/**
 * File TypeScript che implementa la pagina relativa alla modalità Classic
 *  questa modalità invita l'utente ad indovinare il Campione casuale
 *  su base delle informazioni che ricava inserendo dei Campioni
 * 
 * @author Giarolo Mattia, Tinazzi Camillo
 * @version 1.4.0
 */

/**
 * Import dei Componenti
 */
import {
    SafeAreaView,
    View,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    ImageBackground,
    StyleSheet,
} from "react-native";
import DropShadow from "react-native-drop-shadow";
/**
 * Import dei Custom Components
 */
import {
    Title,
    NavBarLittle,
    getListOfProposte,
} from "./General.tsx";
import { AllImages } from "./AllImagesChamps.tsx";
/**
 * Import degli Hooks
 */
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
/**
 * Import dei Custom Types
 */
import type {
    Champion,
} from "./General.tsx";

/**
 * Tipo di dato dello elemento da indovinare : Champion
 */
type typeOfGuess = Champion;

/** Costante al file .json contenente le informazioni sui campioni */
const URL_CHAMPSINFO = "assets/champions.json";
/** Costante del percorso alla cartella che contiene tutte le immagini */
const URL_IMAGES = "assets/images/";
/** Costante del percorso alla cartella che contiene tutte le immagini dei bottoni di navigazione */
const URL_NAVBAR = `${URL_IMAGES}navBarImg/`;
type buttonImgType = {
    quote: any; ability: any; splash: any
}
type imagePathType = {
    bg: any;
    button: buttonImgType
}
/** Costante dell'ogetto che contiene tutti percorsi alle immagini */
const imagesPath: imagePathType = {
    bg: require(`../${URL_IMAGES}bg.webp`),
    button: {
        quote: require(`../${URL_NAVBAR}ButtonQuoteLittle.webp`),
        ability: require(`../${URL_NAVBAR}ButtonAbilityLittle.webp`),
        splash: require(`../${URL_NAVBAR}ButtonSplashLittle.webp`),
    },
};

/**
 * Componente che genere gli indizi disponibili
 * 
 * @param list lista dei campioni testati
 * @param guess campione che bisogna indovinare
 * @param isGuessed boolean che dice se l'elemento è stato indovinato o no
 * @returns JSX.Element 
 */
function Clues(
    { list, guess, isGuessed }: { list: Champion[], guess: typeOfGuess | undefined, isGuessed: boolean }
): JSX.Element {
    /** Numero dell'indizio che si vuole mostrare
     *      0: null
     *      1: indizio sulla quote del campione
     *      2: indizio su una abilità del campione
     *      3: indizio su una skin del campione
     */
    const [clueNum, setClueNum] = useState(0);
    /** Parte di quote randomica scelta da mostrare all'utente */
    const [randomQuote, setRandQuote] = useState("");
    /** Numero di parole per la quote che si vuole mostrare */
    const numOfWords = 10;
    /** Abilità randomica scelta da mostrare all'utente */
    const [randomAbility, setRandomAbility] = useState("");
    /** Skin randomica scelta da mostrare all'utente */
    const [randomSkin, setRandomSkin] = useState(undefined);

    //Setting dei valori randomici e di altri valori per mostrare la modalità come al primo render
    //  questi vengono cambiati solo se viene cambiato l'elemento randomico da indovinare
    useEffect(() => {
        if (!guess) return;
        setClueNum(0);  // azzerata la scelta dell'indizio

        // Setting della parte di quote randomica
        /** Lista di tutte le parole contenute nella lore del campione */
        const listaParole = guess.lore.split(" ");
        /** Numero randomico della parola iniziale */
        const randNum = Math.floor(Math.random() * (listaParole.length - numOfWords));
        /** Stringa che contiene l'indizio */
        let newQuote = "";
        for (let i = randNum; i < randNum + numOfWords; i++) {
            newQuote += (listaParole[i] === guess.name ? `"Nome del Champ"` : listaParole[i]) + " ";     // Si nasconde eventuale nome del campione
        }
        setRandQuote(newQuote);

        // Setting dell'abilità randomica
        setRandomAbility(guess.abilities[Math.floor(Math.random() * guess.abilities.length)].name);

        // Setting della skin randomica
        setRandomSkin((AllImages as any)[guess.id].skins[Math.floor(Math.random() * guess.skins.length)]);
    }, [guess]);

    /** Lista degli oggetti degli indizi base
     *  Struttura del tipo:
     *      {
     *          numMin: minimo numero di tentativi
     *          JSXelement: inidizio da renderizzare
     *      }
     */
    const clues = [
        { numMin: 0, JSXelement: null },
        { numMin: 4, JSXelement: <Text style={fonts.normalText}> {randomQuote} </Text> },
        {
            numMin: 8,
            JSXelement:
                <View>
                    <Image
                        source={guess ? (AllImages as any)[guess.id].abilities[randomAbility] : { uri: "" }}
                        style={styles.clueImg} />
                    <Text style={fonts.normalText}> {randomAbility} </Text>
                </View>
        },
        { numMin: 16, JSXelement: <Image source={randomSkin} style={styles.clueImgChamp} /> },
    ];
    /**
     * Funzione che in base al numero di tentativi minimi restituisce 
     *  se sono stati superati: l'indizio voluto
     *  altrimenti: la scritta di quanti ne mancano
     * @param numMinOfTry numero minimo di tentativi per mostrare il 'clue'
     * @param clue indizio generico da mostrare
     * @returns 
     */
    const renderClue = (numMinOfTry: number, clue: React.JSX.Element | null): React.JSX.Element | null => {
        return (list.length >= numMinOfTry || isGuessed) ? clue
            : <Text style={fonts.normalText}> Effettua altri {numMinOfTry - list.length} tentativi prima </Text>;
    }

    /**
     * Funzione che assegna al tipo di indizio che si vuole mostrare il valore corretto in base al parametro num
     * 
     * @param num numero del nuovo valore del tipo di indizio
     * @returns void
     */
    const buttonPressed = (num: number) => {
        // Se il numero selezionato è quello già selezionato funge da toggle degli indizi; altrimenti assegna il numero dell'indizio scelto
        setClueNum(num === clueNum ? 0 : num);
    }

    // Ritorno del componente
    return (
        <View style={styles.clueMain}>
            <Text style={fonts.secondaryText}>
                Clues
            </Text>
            <View style={styles.clueButtons}>
                {["quote", "ability", "splash"].map((typeOfClue, index) =>
                    <TouchableOpacity
                        key={typeOfClue + "clueButton"}
                        style={
                            list.length <= (2 ** (index + 2)) && !isGuessed
                                ? [styles.clueButton, { opacity: 0.5 }]
                                : styles.clueButton
                        }
                        onPress={() => buttonPressed(index + 1)}>
                        <Image source={imagesPath.button[typeOfClue as keyof buttonImgType]} style={styles.little_buttonImg} />
                        <Text style={fonts.normalText}> {typeOfClue.charAt(0).toUpperCase() + typeOfClue.slice(1)} Clue </Text>
                    </TouchableOpacity>)}
            </View>
            <View style={styles.clueContent}>
                {renderClue(clues[clueNum].numMin, clues[clueNum].JSXelement)}
            </View>
        </View>
    );
};

/**
 * Componente che genera la tabella delle prove effettuate con background delle celle dipendente dal campione da indovinare
 * 
 * @param list lista dei campioni testati
 * @param guess campione che bisogna indovinare
 * @returns JSX.Element 
 */
function Tryed(
    { list, guess }: { list: Champion[], guess: typeOfGuess | undefined }
): JSX.Element {
    /** Funzione per il render dell'intestazione della tabella */
    const renderHeader = () => {
        const titles = [
            "Name", "Gender", "Position(s)", "Species(s)", "Resource", "Range Type(s)", "Regions(s)", "Release"
        ]
        return (
            <View style={styles.header}>
                {titles.map((title) =>
                    <View key={title + "Title"} style={styles.cellHeader}>
                        <Text style={fonts.secondaryText}>{title}</Text>
                    </View>
                )}
            </View>
        );
    }
    /**
     * Funzione che restituisce lo stile della cella in base al confronto tra due liste
     *  se non ci sono elementi in comune è rossa
     *  se almeno un elemento della lista testata è contenuto o tutti gli elementi sono contenuti ma ne mancano alcuni è arancione
     *  se sono con gli stessi elementi è verde
     * 
     * @param arrayTry string[] : array di stringhe di un attributo del campione che si sta provando ad indovinare
     * @param arrayToGuess string[] : array di stringhe di un attributo del campione da indovinare
     * @returns Style
     */
    const getBGofCell = (arrayTry: string[], arrayToGuess: string[]) => {
        if (arrayTry.length === arrayToGuess.length) {
            // Se i due array sono di lunghezza uguale
            if (arrayTry.every((valueTry: string) => arrayToGuess.includes(valueTry))) {
                // Tutti gli elementi dell'array da testare sono contenuti nell'array giusto
                return styles.correctCell;  // I due array sono uguali
            }
        }
        // Se i due array sono di dimensioni diverse o se sono di dimensioni uguali, ma almeno un elemento del primo non è presente nel secondo
        if (arrayTry.some((valueTry: string) => arrayToGuess.includes(valueTry))) {
            // Se almeno un elmento del primo è contenuto nel secondo 
            return styles.notAtAllCorrectCell;  // I due array sono quasi uguali
        } else {
            // Se il primo array non contiene alcun elemento uguale 
            return styles.incorrectCell;    // I due array sono diversi
        }
    };
    /** Funzione che restituisce il render del corpo della tabella */
    const renderBody = (): React.JSX.Element[] | null => {
        // Per ogni campione nella lista dei campioni testati genera una riga con le caratteristiche utile del campione con sfondo della cella dipendente dal campione da indovinare
        return list.map((champion: Champion) => {
            if (!guess) return <View />;
            return (<View key={champion.key} style={styles.row}>
                <ImageBackground
                    source={(AllImages as any)[champion.id].icon}
                    resizeMode="contain"
                    style={styles.cell}>
                    <DropShadow style={styles.dropShadowsB}>
                        <Text style={fonts.normalText}>{champion.name}</Text>
                    </DropShadow>
                </ImageBackground>
                <View style={[styles.cell, champion.gender === guess.gender ? styles.correctCell : styles.incorrectCell]}>
                    <DropShadow style={styles.dropShadowsB}>
                        <Text style={fonts.normalText}>{champion.gender}</Text>
                    </DropShadow>
                </View>
                <View style={[styles.cell, getBGofCell([...champion.positions], [...guess.positions])]}>
                    <DropShadow style={styles.dropShadowsB}>
                        {champion.positions.map(
                            (position, index) =>
                                <Text key={index} style={fonts.normalText}>{position}</Text>
                        )}
                    </DropShadow>
                </View>
                <View style={[styles.cell, getBGofCell([...champion.species], [...guess.species])]}>
                    <DropShadow style={styles.dropShadowsB}>
                        {champion.species.map(
                            (specie, index) =>
                                <Text key={index} style={fonts.normalText}>{specie}</Text>
                        )}
                    </DropShadow>
                </View>
                <View style={[styles.cell, champion.resource === guess.resource ? styles.correctCell : styles.incorrectCell]}>
                    <DropShadow style={styles.dropShadowsB}>
                        <Text style={fonts.normalText}>{champion.resource}</Text>
                    </DropShadow>
                </View>
                <View style={[styles.cell, getBGofCell([...champion.range_types], [...guess.range_types])]}>
                    <DropShadow style={styles.dropShadowsB}>
                        {champion.range_types.map(
                            (type, index) =>
                                <Text key={index} style={fonts.normalText}>{type}</Text>
                        )}
                    </DropShadow>
                </View>
                <View style={[styles.cell, getBGofCell([...champion.regions], [...guess.regions])]}>
                    <DropShadow style={styles.dropShadowsB}>
                        {champion.regions.map(
                            (region, index) =>
                                <Text key={index} style={fonts.normalText}>{region}</Text>
                        )}
                    </DropShadow>
                </View>
                <View style={[styles.cell, champion.release === guess.release ? styles.correctCell : styles.incorrectCell]}>
                    <DropShadow style={styles.dropShadowsB}>
                        <Text style={fonts.normalText}>{champion.release}</Text>
                    </DropShadow>
                </View>
            </View>)
        })
    }
    // Ritorno del componente
    return (
        <ScrollView horizontal>
            <View style={styles.tableContainer}>
                {renderHeader()}
                {renderBody()}
            </View>
        </ScrollView>
    );
};
/**
 * Componente che mostra i dettagli del Campione da indovinare
 * 
 * @param right campione corretto che si deve indovinare 
 * @returns JSX.Element
 */
function Show(
    { right }: { right: typeOfGuess | undefined }
): JSX.Element | null {
    // Ritorno del componente
    if (!right) return null;
    return (
        <View style={styles.rigthChampContent}>
            <View style={styles.rigthChampImgContainer}>
                <DropShadow style={styles.dropShadowsW}>
                    <Image
                        source={(AllImages as any)[right.id].skins[0]}
                        style={styles.rigthChampImg} />
                </DropShadow>
            </View>
            <View>
                <Text style={fonts.mainText}>{right.name}</Text>
                <View style={styles.titleChampContent}>
                    <Text style={fonts.secondaryText}>Titolo</Text>
                    <Text style={fonts.normalText}>{right.title}</Text>
                </View>
                <View style={styles.descriptionChampContent}>
                    <Text style={fonts.secondaryText}>Descrizione</Text>
                    <Text style={fonts.normalText}>{right.lore}</Text>
                </View>
            </View>
        </View>
    );
}
/**
 * Componente che genera la parte di pagina corrispondente alla modalità Classic specifica
 * 
 * @param list lista dei campioni possibili
 * @returns JSX.Element
 */
function InfinityGuesser(
    { list }: { list: Champion[] }
): JSX.Element {
    /** Elemento da indovinare, generato randomicamente alla prima volta che viene renderizzato il componente e solo se si vuole generarne uno nuovo */
    const [toGuess, setToGuess] = useState<typeOfGuess>();
    /** Testo presente nello TextInput */
    const [inputVal, setInputVal] = useState("");
    /** Lista dei campioni esistenti che la pagina propone in base all'input immesso dall'utente */
    const [listProposte, setListProposte] = useState<Champion[]>([]);
    /** Lista dei campioni testati dall'utente */
    const [tryed, setTryed] = useState<Champion[]>([]);
    /** Booleano che dice se il campione è stato indovinato */
    const [isGuessed, setIsGuessed] = useState(false);

    /**
     * Funzione che sceglie un campione casuale
     * @returrn typeOfGuess : Champion
     */
    const randChamp = (): typeOfGuess => {
        return list[Math.floor(Math.random() * list.length)];
    }
    // Setting del campione randomico
    useEffect(
        () => setToGuess(randChamp()),
        []  // no dipendenze; se fossero state messe dipendeze avrebbe eseguito lo useEffect ogni qual volta la variabile di stato definita nelle dipendenze subisce un cambiamento
    );

    /**
     * Procedura che permette di aggiornare il valore del componente TextInput
     * 
     * @param text string : nuovo input immesso
     */
    const inputChange = (text: string) => {
        setInputVal(text);
    }
    /**
     * Funzione che verifica se il campione immesso esista veramente tra i campioni possibili e se corrisponde a quello da indovinare
     * @param name nome del campione immesso (opzionale)
     */
    const getATry = (name?: string) => {
        /**
         * Procedura che in base al nome del campione che si vuole provare:
         *  se esiste lo salva nella lista dei testa se non già presente e se quello giusto imposta il valore di 'isGuessed' a vero
         * @param nameOfGuess nome del campione che si vuole testare
         */
        const check = (nameOfGuess: string) => {
            // Salva il primo campione, se esiste, che ha l'attributo "nome" uguale al nome immesso nell'input
            const newChamp: Champion | undefined = list.find(
                (champ: Champion): boolean => {
                    return (champ.name.toLowerCase().replace(" ", "") === nameOfGuess.toLowerCase().replace(" ", ""));
                });
            // Se il campione esiste e non è già stato immesso nella lista dei campioni testati
            if (newChamp &&
                !tryed.find((champ: Champion): boolean => {
                    return (champ.key === newChamp.key);
                })
            ) {
                // Salva il campione in testa alla lista
                setTryed([newChamp, ...tryed]);
                // Se il campione testato è uguale a quello da indovinare
                if (toGuess && newChamp.key === toGuess.key) {
                    setIsGuessed(true); // Imposta la variabile che si ha indovinato il campione a true
                }
            }
            setInputVal("");    // Imposta il "TextInput" a vuoto
            setListProposte([]);    // Imposta la lista dei campioni che si propone a vuota
        }
        // Prova del campione
        if (name) {
            check(name);
        } else if (inputVal.trim()) {
            check(inputVal);
        }
    }
    /**
     * Funzione che mostra il possibile campione esistente con nome simile a quello immesso dall'utente
     *  il campione può essere premuto per selezionarlo come campione da provare
     * @param champ campione 
     * @returns 
     */
    const renderProposta = (champ: Champion) => {
        return (
            <TouchableOpacity
                key={champ.key}
                style={styles.champPropostaConteiner}
                onPress={() => { getATry(champ.name) }}>
                <View style={styles.champProIconContainer}>
                    <Image
                        source={(AllImages as any)[champ.id].icon}
                        style={styles.champProIcone} />
                </View>
                <Text style={fonts.normalText}>{champ.name}</Text>
            </TouchableOpacity>
        )
    }
    /** Procedura che imposta un nuovo campione randomico */
    const resetRandom = () => {
        setInputVal("");
        setTryed([]);
        setIsGuessed(false);
        setToGuess(randChamp());
    };
    /** Procedura che mette induce allo stato di vittoria (campione indovinato) */
    const surrending = () => {
        setInputVal("");
        if (toGuess) setTryed([toGuess, ...tryed]);
        setIsGuessed(true);
    }
    // Ritorno del componente
    return (
        <View style={styles.infinity}>
            <Clues guess={toGuess} list={tryed} isGuessed={isGuessed} />
            <View style={styles.input}>
                <TextInput
                    value={inputVal}
                    style={[fonts.normalText, styles.inputBar]}
                    onChangeText={
                        (text) => {
                            inputChange(text);
                            setListProposte(getListOfProposte(list, tryed, text));
                        }}
                    onSubmitEditing={() => getATry()}
                    placeholder="Nome campione ..."
                    placeholderTextColor="#c0c0c0"
                    editable={!isGuessed}
                />
                <View style={styles.champsProposteConteiner}>
                    {listProposte.map((champ) => renderProposta(champ))}
                </View>
            </View>
            {!isGuessed ? null
                : <Show right={toGuess} />}
            <Tryed list={tryed} guess={toGuess} />
            <View style={styles.buttonsOptionsContainer}>
                <DropShadow style={styles.dropShadowsW}>
                    <TouchableOpacity onPress={surrending} style={styles.buttonsOptions} disabled={isGuessed} >
                        <Text style={fonts.normalText}>Surrender?</Text>
                    </TouchableOpacity>
                </DropShadow>
                <DropShadow style={styles.dropShadowsW}>
                    <TouchableOpacity onPress={resetRandom} style={styles.buttonsOptions}>
                        <Text style={fonts.normalText}>New Random</Text>
                    </TouchableOpacity>
                </DropShadow>
            </View>
        </View>
    );
};
/**
 * Componente che crea la pagina della modalità Classic
 * 
 * @returns JSX.Element
 */
function Classic(): JSX.Element {
    /** Lista dei campioni possibili */
    const [listOfChamps, setListOfChamps] = useState<Champion[]>([]);
    /** Stato di loading: si stanno recuperando dati? */
    const [loading, setLoading] = useState(false);

    /** Procedura per recuperare asincronamente i campioni */
    const getLists = async () => {
        setLoading(true);
        try {
            const json = await require("../" + URL_CHAMPSINFO); // Lettura del file
            setListOfChamps(json);
        } catch (e) {
            console.error(e);
            (useNavigation() as any).navigate("Home");
        } finally { setLoading(false) }
    }
    // Recupero dei campioni
    useEffect(
        () => {
            if (loading) return;
            getLists();
        },
        []
    );
    // Ritorno del componente
    return (
        <SafeAreaView style={styles.main}>
            <ImageBackground
                source={imagesPath.bg}
                resizeMode="cover"
                style={styles.bgImg}>
                <View style={styles.contentAll}>
                    <Title />
                    <View style={styles.content}>
                        {
                            !loading ?
                                <ScrollView>
                                    <NavBarLittle notButtonOf={"classic"} />
                                    <InfinityGuesser list={listOfChamps} />
                                </ScrollView>
                                :
                                <View style={styles.activityContainer}>
                                    <ActivityIndicator color="white" size="large" />
                                    <Text style={fonts.notImpText}>Catching a random Champion</Text>
                                </View>
                        }
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

/** Costante contenente gli stili dei testi */
const fonts = StyleSheet.create({
    mainText: {
        fontSize: 24,
        fontFamily: "Friz-Quadrata-Std",
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
    },
    secondaryText: {
        fontSize: 20,
        fontFamily: "Friz-Quadrata-Std",
        fontWeight: "bold",
        color: "#fff",
    },
    normalText: {
        fontSize: 16,
        fontFamily: "Friz-Quadrata-Std",
        fontWeight: "bold",
        textAlign: "justify",
        color: "#fff",
    },
    notImpText: {
        fontSize: 12,
        fontFamily: "Friz-Quadrata-Std",
        fontWeight: "bold",
        color: "#fff",
        textAlignVertical: "center",
    },
    inputText: {},
});
/** Costante contenente gli stili usati nei vari componenti */
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },

    bgImg: {
        flex: 1,
    },
    contentAll: {
        flex: 1,
        backgroundColor: "rgba(0,0,0, 0.5)",
    },

    content: {
        flex: 9,
        padding: 2,
        textAlign: "center",
        justifyContent: "center",
    },

    activityContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    infinity: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    clueMain: {
        width: "80%",
        margin: 3,
        padding: 5,
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#af9767",
        backgroundColor: "#1e2328",
    },
    clueButtons: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    clueButton: {
        margin: 5,
        alignItems: "center",
    },
    little_buttonImg: {
        width: 64,
        resizeMode: "contain",
    },
    clueContent: {
        width: "90%",
        marginTop: 5,
        padding: 5,
        alignItems: "center",
        alignContent: "center",
        borderTopWidth: 2,
        borderColor: "#969696",
    },
    clueImg: {
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#969696",
    },
    clueImgChamp: {
        height: 140,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: "contain",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#969696",
    },

    input: {
        flex: 1,
        width: "50%",
        margin: 16,
    },
    inputBar: {
        width: "100%",
        padding: 8,
        textAlign: "left",
        backgroundColor: "#1e2328",
        borderWidth: 3,
        borderRadius: 2,
        borderColor: "#058899",
    },
    champsProposteConteiner: {
        width: "100%",
    },
    champPropostaConteiner: {
        flexDirection: "row",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 4,
        alignItems: "center",
        backgroundColor: "#1e2328",
        borderWidth: 2,
    },
    champProIconContainer: {},
    champProIcone: {
        height: 40,
        width: 40,
        margin: 2,
        marginRight: 10,
        resizeMode: "contain",
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#969696",
        backgroundColor: "#1e2328"
    },

    buttonsOptionsContainer: {
        margin: 8,
        flexDirection: "row",
    },
    buttonsOptions: {
        margin: 5,
        padding: 8,
        backgroundColor: "#1e2328",
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#af9767",
    },

    rigthChampContent: {
        flex: 1,
        width: "75%",
        padding: 8,
        backgroundColor: "#1e2328",
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#af9767",
    },
    rigthChampImgContainer: {
        marginBottom: 8,
    },
    rigthChampImg: {
        height: 140,
        width: "85%",
        resizeMode: "cover",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#969696",
    },
    titleChampContent: {
        flex: 1,
    },
    descriptionChampContent: {
        flex: 1,
        marginTop: 4,
    },

    tableContainer: {
        flex: 1,
        padding: 25,
    },
    header: {
        flexDirection: 'row',
        padding: 2,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        padding: 2,
        borderBottomColor: '#ccc',
    },
    cellHeader: {
        flex: 1,
        flexWrap: "nowrap",
        width: 94,
        height: 64,
        margin: 2,
        marginBottom: 3,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        borderBottomWidth: 3,
    },
    cell: {
        flex: 1,
        width: 94,
        height: 94,
        margin: 1,
        marginBottom: 2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#969696",
    },
    correctCell: {
        backgroundColor: "green",
    },
    notAtAllCorrectCell: {
        backgroundColor: "orange",
    },
    incorrectCell: {
        backgroundColor: "red",
    },

    dropShadowsW: {
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    dropShadowsB: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
});

export default Classic;
