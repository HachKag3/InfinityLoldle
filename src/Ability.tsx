/**
 * File TypeScript che implementa la pagina relativa alla modalità Ability
 *  questa modalità invita l'utente ad indovinare a quale Campione corrisponde la abilità proposta
 * 
 * @author Giarolo Mattia, Tinazzi Camillo
 * @version 1.0.0
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
    Ability,
    Champion,
} from "./General.tsx";

/**
 * Tipo di dato dello elemento da indovinare : Champion
 */
type typeOfGuess = {
    champ: Champion,
    ability: Ability
};

/** Costante al file .json contenente le informazioni sui campioni */
const URL_CHAMPSINFO = "assets/champions.json";
/** Costante del percorso alla cartella che contiene tutte le immagini */
const URL_IMAGES = "assets/images/";
/** Costante del percorso alla cartella che contiene tutte le immagini dei bottoni di navigazione */
const URL_NAVBAR = `${URL_IMAGES}navBarImg/`;
/** Costante dell'ogetto che contiene tutti percorsi alle immagini */
const imagesPath = {
    bg: require(`../${URL_IMAGES}bg.webp`),
    button: require(`../${URL_NAVBAR}ButtonAbilityLittle.webp`),
};

/**
 * Componente che genere lo indizio disponibile
 * 
 * @param list lista dei campioni testati
 * @param guess campione e abilità che bisogna indovinare
 * @param isGuessed boolean che dice se l'elemento è stato indovinato o no
 * @returns JSX.Element 
 */
function Clues(
    { list, guess, isGuessed }: { list: Champion[], guess: typeOfGuess | undefined, isGuessed: boolean }
): JSX.Element {
    /** Variabile di stato che dice se è stato richiesto o meno l'indizio */
    const [isPressed, setIsPressed] = useState(false);
    /** Procedura di toggle dell'indizio */
    const buttonPressed = () => {
        setIsPressed(!isPressed);
    }
    // Ritorno del componente
    return (
        <View style={styles.clueContainer}>
            {
                !isPressed ? null :
                    <Text style={fonts.normalText}>
                        {list.length >= 8 || isGuessed ? guess?.ability.name
                            : `Effettua altri ${8 - list.length} tentativi prima`}
                    </Text>
            }
            <TouchableOpacity
                style={list.length >= 8 || isGuessed ? styles.clueButton
                    : [styles.clueButton, { opacity: 0.5 }]}
                onPress={() => buttonPressed()}>
                <Image source={imagesPath.button} style={styles.little_buttonImg} />
                <Text style={fonts.normalText}> Name Clue </Text>
            </TouchableOpacity>
        </View>
    );
}
/**
 * Funzione che mostra la sezione in cui principalmente viene mostrata l'abilità da indovinare
 * 
 * @param list lista dei campioni testati
 * @param guess campione e abilità che bisogna indovinare
 * @param isGuessed boolean che dice se l'elemento è stato indovinato o no
 * @returns JSX.Element 
 */
function ToGuess(
    { list, guess, isGuessed }: { list: Champion[], guess: typeOfGuess | undefined, isGuessed: boolean }
): JSX.Element | null {
    /** Gradi con cui viene ruotata l'immagine da mostrare */
    const [rotationDeg, setRotationDeg] = useState(0);
    /** Setting dei gradi di rotazione solo quando cambia l'elemento da indovinare */
    useEffect(() => {
        setRotationDeg([90, 180, 270][Math.floor(Math.random() * 3)]);
    }, [guess]);

    // Ritorno del componente
    if (!guess?.ability) return null;
    return (
        <View style={styles.toGuessContainer}>
            <Text style={fonts.secondaryText}>Quale campione possiede questa abilità?</Text>
            <DropShadow style={styles.dropShadowsW}>
                <View style={styles.abilityImageContainer}>
                    <Image
                        source={(AllImages as any)[guess.champ.id].abilities[guess.ability.name]}
                        style={isGuessed || list.length >= 4 ? styles.toGuessImg
                            : [styles.toGuessImg,
                            list.length < 2 ? { opacity: 0.15 } : null,
                            list.length < 4 ? { transform: [{ rotate: `${rotationDeg}deg` }] } : null]} />
                </View>
            </DropShadow>
            <Clues list={list} guess={guess} isGuessed={isGuessed} />
        </View>
    );
}
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
    /**
     * Funzione che restituisce lo stile in base allo elemento da indovinare
     *  se l'utente non ha indovinato è rosso
     *  se l'utente ha indovinato è verde
     * 
     * @param tryed Champion : campione provato
     * @returns Style
     */
    const getBGofTryed = (tryed: Champion) => {
        return guess?.champ.id === tryed.id ? styles.correctChamp
            : styles.notCorrectChamp;
    }
    /** Funzione che restituisce la visualizzazione della lista dei campioni provati */
    const renderList = (): React.JSX.Element[] | undefined => {
        return list.map((champ: Champion) =>
            <View key={champ.key} style={[styles.tryedChampConteiner, getBGofTryed(champ)]}>
                <View style={styles.champIconContainer}>
                    <DropShadow style={styles.dropShadowsW}>
                        <Image
                            source={(AllImages as any)[champ.id].icon}
                            style={styles.tryedChampIcone} />
                    </DropShadow>
                </View>
                <Text style={fonts.secondaryText}>{champ.name}</Text>
            </View>);
    }
    // Ritorno del componente
    return (
        <ScrollView style={styles.tryedList}>
            {renderList()}
        </ScrollView>
    );
}
/**
 * Componente che mostra i dettagli della abilità da indovinare
 * 
 * @param right elemento corretto che si deve indovinare 
 * @returns JSX.Element
 */
function Show(
    { right }: { right?: typeOfGuess | undefined }
): JSX.Element | null {
    if (!right) return null;
    return (
        <View style={styles.rigthConteiner}>
            <View style={styles.rigthChampContent}>
                <View style={styles.champIconContainer}>
                    <DropShadow style={styles.dropShadowsW}>
                        <Image
                            source={(AllImages as any)[right.champ.id].icon}
                            style={styles.champIcone} />
                    </DropShadow>
                </View>
                <Text style={fonts.mainText}>{right.champ.name}</Text>
            </View>
            <View style={styles.rigthAbilityContent}>
                <View style={styles.champAbilityContainer}>
                    <DropShadow style={styles.dropShadowsW}>
                        <Image
                            source={(AllImages as any)[right.champ.id].abilities[right.ability.name]}
                            style={styles.rigthAbilityImg} />
                    </DropShadow>
                </View>
                <View>
                    <Text style={fonts.mainText}>{right.ability.name}</Text>
                    <View style={styles.titleChampContent}>
                        <Text style={fonts.secondaryText}>Descrizione</Text>
                        <Text style={fonts.normalText}>{right.ability.description}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
/**
 * Componente che genera la parte di pagina corrispondente alla modalità Ability specifica
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
     * Funzione che sceglie un campione e la sua ability casualmente
     * @returrn typeOfGuess
     */
    const randGuess = (): typeOfGuess => {
        /** Campione randomico */
        const randChamp = list[Math.floor(Math.random() * list.length)];
        /** Ability randomica del campione randomico */
        const randAbility = randChamp?.abilities[Math.floor(Math.random() * randChamp?.abilities.length)];
        // Ritorno degli elementi randomici
        return {
            champ: randChamp,
            ability: randAbility
        }
    }
    // Setting dello elemento randomico da indovinare
    useEffect(
        () => {
            setToGuess(randGuess());
        },
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
                if (toGuess && newChamp.key === toGuess.champ.key) {
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
        setToGuess(randGuess());
    };
    /** Procedura che mette induce allo stato di vittoria (campione indovinato) */
    const surrending = () => {
        setInputVal("");
        if (toGuess) setTryed([toGuess.champ, ...tryed]);
        setIsGuessed(true);
    }
    // Ritorno del componente
    return (
        <View style={styles.infinity}>
            <ToGuess list={tryed} guess={toGuess} isGuessed={isGuessed} />
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
                <ScrollView style={styles.champsProposteConteiner}>
                    {listProposte.map((champ) => renderProposta(champ))}
                </ScrollView>
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
 * Componente che crea la pagina della modalità Ability
 * 
 * @returns JSX.Element
 */
function Ability(): JSX.Element {
    /** Lista dei campioni possibili */
    const [listOfChamps, setListOfChamps] = useState<Champion[]>([]);
    /** Stato di loading: si stanno recuperando dati? */
    const [loading, setLoading] = useState(false);

    /** Procedura per recuperare asincronamente i campioni */
    const getLists = async () => {
        setLoading(true);
        try {
            const json = await require("../" + URL_CHAMPSINFO);
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
                                    <NavBarLittle notButtonOf={"ability"} />
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

    toGuessContainer: {
        flex: 1,
        width: "85%",
        padding: 8,
        margin: 5,
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#af9767",
        backgroundColor: "#1e2328",
    },
    abilityImageContainer: {},
    toGuessImg: {
        margin: 5,
        resizeMode: "contain",
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#969696",
        backgroundColor: "#FFF0FF",
    },
    clueContainer: {},
    clueButton: {
        margin: 5,
        alignItems: "center",
    },
    little_buttonImg: {
        resizeMode: "contain",
        width: 64,
    },

    input: {
        width: "50%",
        flex: 1,
        margin: 16,
    },
    inputBar: {
        width: "100%",
        textAlign: "left",
        padding: 8,
        backgroundColor: "#1e2328",
        borderWidth: 3,
        borderRadius: 2,
        borderColor: "#058899",
    },
    champsProposteConteiner: {
        width: "100%",
    },
    champPropostaConteiner: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        backgroundColor: "#1e2328",
        borderWidth: 2,
        padding: 4,
        alignItems: "center",
    },
    champProIconContainer: {

    },
    champProIcone: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        margin: 2,
        marginRight: 10,
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
        backgroundColor: "#1e2328",
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#af9767",
        padding: 8,
    },

    rigthConteiner: {
        width: "75%",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#1e2328",
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#af9767",
        padding: 8,
        margin: 5,
    },
    rigthChampContent: {
        width: "95%",
        flex: 1,
        flexDirection: "row",
        marginBottom: 8,
        paddingBottom: 8,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#969696",
    },
    rigthAbilityContent: {
        flex: 1,
    },
    champIconeContainer: {
        marginBottom: 8,
    },
    champAbilityContainer: {
        marginBottom: 8,
    },
    champIcone: {
        height: 90,
        width: 90,
        resizeMode: "contain",
        margin: 2,
        marginRight: 10,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#969696",
        backgroundColor: "#1e2328"
    },
    rigthAbilityImg: {
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#969696",
    },
    titleChampContent: {
        flex: 1,
    },
    descriptionChampContent: {
        flex: 1,
    },

    tryedList: {
        width: "100%",
    },
    tryedChampConteiner: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",
        flexDirection: "row",
        backgroundColor: "#1e2328",
        borderWidth: 2,
        borderRadius: 5,
        padding: 4,
        margin: 5,
        alignItems: "center",
    },
    champIconContainer: {

    },
    tryedChampIcone: {
        height: 64,
        width: 64,
        resizeMode: "contain",
        margin: 2,
        marginRight: 10,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#969696",
        backgroundColor: "#1e2328"
    },
    correctChamp: {
        backgroundColor: "#35b956",
        borderColor: "#969696",
    },
    notCorrectChamp: {
        backgroundColor: "#df5858",
        borderColor: "#ff8686",
    },

    tableContainer: {
        flex: 1,
        padding: 25,
    },
    header: {
        padding: 2,
        flexDirection: 'row',
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    row: {
        padding: 2,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
    },
    cellHeader: {
        width: 90,
        height: 64,
        flex: 1,
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        borderBottomWidth: 3,
        margin: 2,
        marginBottom: 3
    },
    cell: {
        flex: 1,
        width: 90,
        height: 90,
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

export default Ability;
