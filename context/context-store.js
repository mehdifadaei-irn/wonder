import React, { useState } from "react";
import { createContext } from "react";
import { dark_theme } from "../theme/theme";

export const MainContext = createContext({
  theme: dark_theme,
  toggleTheme: () => {},
});

function MainContextProvider({ children }) {
  const [theme, setTheme] = useState(dark_theme);

//   const toggleTheme = () => {
//     if(theme.dark=== 'false'){
//       setTheme(darkTheme)
//     }else {
//       setTheme(lightTheme)
//     }
//   };

  const value = {
    // toggleTheme,
    theme,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default MainContextProvider;
