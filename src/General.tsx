/**
 * File TypeScript che implementa i diversi custom components utilizzati in gran parte del progetto
 *  così da evitare scritture ripetitive del codice
 * 
 * @author Giarolo Mattia, Tinazzi Camillo
 * @version 1.1.0
 */

/**
 * Import dei Componenti
 */
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import DropShadow from "react-native-drop-shadow";
/**
 * Import degli Hooks
 */
import { useNavigation } from "@react-navigation/native";

/**
 * Tipo di dato dell'oggetto generico "Skin"
 *  NB: l'immagine ha dimensione 1215x717
 */
type Skin = {
    cardinal: number,
    id: string,
    num: number,
    name: string,
}
/**
 * Tipo di dato dell'oggetto generico "Ability"
 *  NB: l'immagine ha dimensione 64x64
 */
type Ability = {
    id: string,
    name: string,
    description: string,
    image: string,
}
/**
 * Tipo di dato dell'oggetto generico "Campione"
 *  NB: l'immagine dell'icona ha dimensione 120x120
 */
type Champion = {
    id: string,
    key: string,
    name: string,
    title: string
    image: string,
    skins: Skin[],
    lore: string,
    abilities: Ability[],
    gender: string,
    positions: string[],
    species: string[]
    resource: string,
    range_types: string[],
    regions: string[],
    release: number,
}

/** Costante del percorso alla cartella che contiene tutte le immagini */
const URL_IMAGES = "assets/images/";
/** Costante del percorso alla cartella che contiene tutte le immagini dei bottoni di navigazione */
const URL_NAVBAR = `${URL_IMAGES}navBarImg/`
/** Costante dell'ogetto che contiene tutti percorsi alle immagini */
const imagesPath = {
    title: require(`../${URL_IMAGES}titleImg.webp`),
    logoUni: require(`../${URL_IMAGES}uniLogo.webp`),
    button: {
        classic: require(`../${URL_NAVBAR}ButtonClassicLittle.webp`),
        ability: require(`../${URL_NAVBAR}ButtonAbilityLittle.webp`),
        splash: require(`../${URL_NAVBAR}ButtonSplashLittle.webp`),
    },
};

/**
 * Componente che restituisce il generico Title dell'applicazione
 * 
 * Contiene un immagine che alla pressione riporta alla pagina Home
 * 
 * @returns JSX.Element
 */
function Title(): JSX.Element {
    const navigation = useNavigation();
    /** Procedura che, quando chiamata, conduce alla pagina HomePage */
    const toHome = () => (navigation as any).navigate("Home")
    // Ritorno del componente
    return (
        <View style={styles.title}>
            <TouchableOpacity onPress={toHome}>
                <DropShadow style={styles.dropShadows}>
                    <Image
                        source={imagesPath.title}
                        style={styles.titleImg} />
                </DropShadow>
            </TouchableOpacity>
        </View>
    );
}

type PropsNavBarLittle = {
    notButtonOf: string
}
/**
 * Componente che restituisce una barra di navigazione, verso le pagine possibili, disposta in modo orizzontale
 * 
 * Tipicamente utilizzato nel contenuto della pagina come primo elemento
 * 
 * @param {string} notButtonOf numero tra 0 e 4 che identifica quale dei 5 bottoni non verranno visualizzati; se immesso un numero non appartenente all'intervallo [0 .. 4] verranno visualizzati tutti i bottoni
 * @returns JSX.Element
 */
function NavBarLittle(props: PropsNavBarLittle): JSX.Element {
    const navigation = useNavigation();
    /** Procedura che conduce che quando chiamata conduce alla pagina indicata */
    const navigateTo = (page: string) => (navigation as any).navigate(page);
    /** Oggetto che contiene le caratteristiche dei bottoni per ogni modalità
     * 
     *      action: procedura da chiamare alla pressione del pottone; porta alla corrsipettiva modalità
     *      imgUrl: percorso che porta alla immagine di quel bottone
     */
    const buttons = {
        Classic: {
            name: "classic",
            action: () => navigateTo("Classic"),
            imgUrl: imagesPath.button.classic,
        },
        Ability: {
            name: "ability",
            action: () => navigateTo("Ability"),
            imgUrl: imagesPath.button.ability,
        },
        Splash: {
            name: "splash",
            action: () => navigateTo("Splash"),
            imgUrl: imagesPath.button.splash,
        },
    };
    // Ritorno del componente
    return (
        <View style={styles.little_navbar}>
            {Object.values(buttons).map((bottone, index) => {
                if (props.notButtonOf === bottone.name) return null;   // Se il bottone corrisponde a quello da non inserire viene inserito null
                // Altrimenti il bottone da renderizzare
                return (
                    <TouchableOpacity key={index} onPress={bottone.action} style={styles.little_button}>
                        <DropShadow style={styles.dropShadows}>
                            <Image
                                source={bottone.imgUrl}
                                style={styles.little_buttonImg} />
                        </DropShadow>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

/**
 * Componente che restituisce il generico Footer
 * 
 * Contiene chi ha realizzato l'applicazione e la foto del logo dell'università di appartenenta(con relativo dipartimento)
 * 
 * @returns JSX.Element
 */
function Footer(): JSX.Element {
    return (
        <View style={styles.footer}>
            <Text style={[styles.footerText, fonts.notImpText]}>
                A Work made by: Giarolo Mattia & Tinazzi Camillo
            </Text>
            <View style={styles.imgFooterContainer}>
                <DropShadow style={styles.dropShadows}>
                    <Image
                        source={imagesPath.logoUni}
                        style={styles.imgFooter} />
                </DropShadow>
            </View>
        </View>
    );
}

/**
 * Funzione che su base delle liste e di un valore testuale crea una nuova lista come intersezione delle due e che contiene solo i campioni che iniziano con quell'imput
 * 
 * @param listAllChamp Champion[] : lista di tutti i campioni
 * @param listTryedChamp  Champion[] : lista di tutti i campioni già testati
 * @param inputVal string : testo che viene usato come verifica dell'inizio del nome del campione
 * @returns Champion[]
 */
function getListOfProposte(
    listAllChamp: Champion[], listTryedChamp: Champion[], inputVal: string
): Champion[] {
    /**
     * Funzione che ritorna solo i campioni presenti nel primo array, ma non nel secondo
     * @param a1 array di campioni possibili
     * @param a2 array dei campioni già testati
     * @returns Champion[]
     */
    const diffArray = (a1: Champion[], a2: Champion[]): Champion[] => {
        return a1.filter((value) => !a2.includes(value));
    }
    /**
     * Procedura che in base al testo immesso ritorna una lista dei campioni simili a questo input
     * @param text 
     */
    const filterList = (text: string) => {
        if (!text) {
            // Se nessun testo immesso non ci sono campioni proponibili
            return [];
        } else {
            // Ritorno della lista di campioni proponibili togliendo quelli già immessi in precedenza e quelli che non contengono all'inizio del nome l'input immesso
            return (
                diffArray(listAllChamp, listTryedChamp)     // si ottiene l'intersezione tra le due liste
                    .filter((champ) =>                      // si applica il filtro su base dell'input immesso
                        champ.name.toLowerCase().startsWith(text.toLowerCase().replace(" ", ""))
                    )
            );
        }
    }
    // Ritorno della lista
    return filterList(inputVal);
}

/** Costante contenente gli stili dei testi */
const fonts = StyleSheet.create({
    notImpText: {
        fontSize: 14,
        fontFamily: "Friz-Quadrata-Std",
        fontWeight: "bold",
        color: "#fff",
    },
});
/** Costante contenente gli stili usati nei vari componenti */
const styles = StyleSheet.create({
    title: {
        height: 128,
        justifyContent: "center",
    },
    titleImg: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: "contain",
    },

    little_navbar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 5,
    },
    little_button: {
        margin: 5,
    },
    little_buttonImg: {
        resizeMode: "cover",
    },

    footer: {
        flex: 2,
        backgroundColor: "#1e2328",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        borderColor: "#af9767",
        borderWidth: 2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomWidth: 0,
        marginTop: 5,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 5,
    },
    footerText: {
        flex: 1,
        textAlignVertical: "center",
        textAlign: "center",
    },
    imgFooterContainer: {
        flex: 1,
        alignItems: "center",
    },
    imgFooter: {
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: "contain",
    },

    dropShadows: {
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
});

export {
    getListOfProposte,
    Title,
    NavBarLittle,
    Footer,
};

export type {
    Skin,
    Ability,
    Champion
}
