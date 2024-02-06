/**
 * File TypeScript che implementa l'applicazione che viene eseguita per prima dal progetto
 *  
 *  nei file android e ios del progetto sono state messe le impostazioni di blocco rotazione schermo
 * 
 * @author Giarolo Mattia, Tinazzi Camillo
 * @version 1.0.0
 */

/**
 * Navigation Library:
 *  librerie necessarie per permettere la navigazione tra più pagine e quindi rendere il progetto react native una multi-page application
 *  
 *  viene utilizzata nello specifico la navigazione stack
 */
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

/**
 * Custom Component
 *  componenti importati da altri file del progetto
 *  questi verranno utillizzati per definire su quali componenti/pagine il progetto può navigare
 */
import HomePage from "./HomePage.tsx";
import Classic from "./Classic.tsx";
import Ability from "./Ability.tsx";
import Splash from "./Splash.tsx";

/**
 * Stack Navigator
 *  elemento necessario per la definizione della navigazione di tipo stack
 */
const Stack = createStackNavigator();

/**
 * Componente che definisce su quali pagine avviene la navigazione di tipo Stack
 * 
 * La pagina iniziale che viene presentata all'avvio dell'applicazione è il componente HomePage
 * 
 * @returns JSX.Elements
 */
function App(): JSX.Element {
    // Ritorno della dichiarazione di tutte le pagine/root su cui può avvenire la navigazione
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={navOption}
        >
            <Stack.Screen
                name="Home" component={HomePage} />
            <Stack.Screen
                name="Classic" component={Classic} />
            <Stack.Screen
                name="Ability" component={Ability} />
            <Stack.Screen
                name="Splash" component={Splash} />
        </Stack.Navigator>
    );
}
/**
 * Componente che mette all'interno di un NavigationContainer l'applicazione vera e propria
 * Restituisce quindi l'applicazione su cui si può navigare tra le diverse pagine
 * 
 * @returns JSX.Element
 */
function Providers(): JSX.Element {
    // Ritorno dell'applicazione con possibilità di navigazione
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
}

/**
 * Costante contenente le opzioni del Navigator
 */
const navOption: StackNavigationOptions = {
    headerShown: false,
};

export default Providers;
