import { createContext, useContext, useState } from "react";
import { themeOptions } from "../Utils/themeOptions";


const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    console.log(themeOptions[0].value);
    const defaultValue = themeOptions[0].value;

    const [theme, setTheme] = useState(defaultValue);

    const values = {
        theme,
        setTheme
    }

    return (<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
}         

export const useTheme = () => useContext(ThemeContext);