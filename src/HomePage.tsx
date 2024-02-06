/**
 * File TypeScript che implementa la pagina iniziale del progetto
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
    TouchableOpacity,
    Text,
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
    Footer,
} from "./General.tsx";
/**
 * Import degli Hooks
 */
import { useNavigation } from "@react-navigation/native";

/** Costante del percorso alla cartella che contiene tutte le immagini */
const URL_IMAGES = "assets/images/";
/** Costante del percorso alla cartella che contiene tutte le immagini dei bottoni di navigazione */
const URL_NAVBAR = `${URL_IMAGES}navBarImg/`
/** Costante dell'ogetto che contiene tutti percorsi alle immagini */
const imagesPath = {
    bg: require(`../${URL_IMAGES}bg.webp`),
    button: {
        classic: require(`../${URL_NAVBAR}ButtonClassic.webp`),
        ability: require(`../${URL_NAVBAR}ButtonAbility.webp`),
        splash: require(`../${URL_NAVBAR}ButtonSplash.webp`),
    },
};

/**
 * Componente che restituisce una barra di navigazione, verso le pagine possibili, disposta in modo verticale
 * 
 * @returns JSX.Element
 */
function NavBar(): JSX.Element {
    const navigation = useNavigation();
    /** Procedura che, quando chiamata, conduce alla pagina indicata */
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
        <View style={styles.navBar}>
            {Object.values(buttons).map((bottone, index) => {
                return (
                    <TouchableOpacity key={index} onPress={bottone.action} style={styles.button}>
                        <DropShadow style={styles.dropShadows}>
                            <Image
                                source={bottone.imgUrl}
                                style={styles.buttonImg} />
                            <Text style={[styles.textOver, fonts.secondaryText]}>
                                {bottone.name.charAt(0).toUpperCase() + bottone.name.slice(1)}
                            </Text>
                        </DropShadow>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

/**
 * Componente che realizza la HomePage dell'applicazione
 * 
 * @returns JSX.Element
 */
function HomePage(): JSX.Element {
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
                        <ScrollView>
                            <NavBar />
                        </ScrollView>
                    </View>
                    <Footer />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

/** Costante contenente gli stili dei testi */
const fonts = StyleSheet.create({
    secondaryText: {
        fontSize: 20,
        fontFamily: "Friz-Quadrata-Std",
        fontWeight: "bold",
        color: "#fff",
    }
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
    },
    navBar: {},
    button: {
        width: "70%",
        marginVertical: 3,
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonImg: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },

    textOver: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        textAlignVertical: "center",
    },

    dropShadows: {
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
});

export default HomePage;
