import { DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper } from "react-native-paper";
import { DarkTheme as DarkThemeNav, DefaultTheme as DefaultThemeNav } from "@react-navigation/native";

export const ligthTheme = {
    ...DefaultThemePaper,
    ...DefaultThemeNav,
    colors: {
        ...DefaultThemePaper.colors,
        ...DefaultThemeNav.colors,
        primary: '#80ed99',
        accent: '#38a3a5',
        background: '#f8f9fa',
        text: '#161a1d',
    },
    roundness: 15,
}

export const darkTheme = {
    ...DarkThemePaper,
    ...DarkThemeNav,
    colors: {
        ...DarkThemePaper.colors,
        ...DarkThemeNav.colors,
        primary: '#57cc99',
        accent: '#22577a',
        background: '#141516',
        text: '#f8f9fa',
    },
    roundness: 15,
    
}
