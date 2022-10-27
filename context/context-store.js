import { createContext, useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";

export const DrugsContext = createContext();

export const DrugsProvider = ({ children }) => {
  const [test, setTest] = useState("testy");
  const [mainDataE, setMainDataE] = useState([]);

  const [rightItem, setRightItem] =useState("");
  const [LeftItem, setLeftItem] =useState("");


  let [fontsLoaded] = useFonts({
    Shabnam: require("../assets/fonts/Shabnam.ttf"),
    ShabnamBold: require("../assets/fonts/Shabnam-Bold.ttf"),
    ShabnamLight: require("../assets/fonts/Shabnam-Light.ttf"),
    IranNastaliq: require("../assets/fonts/IranNastaliq.ttf"),
    VazirBold: require("../assets/fonts/Vazir-Bold.ttf"),
    VazirLight: require("../assets/fonts/Vazir-Light.ttf"),
    VazirMedium: require("../assets/fonts/Vazir-Medium.ttf"),
    VazirThin: require("../assets/fonts/Vazir-Thin.ttf"),
    Vazir: require("../assets/fonts/Vazir.ttf"),
  });

  return (
    <DrugsContext.Provider
      value={{
        test,
        fontsLoaded,
        mainDataE,
        setMainDataE,
        rightItem,
        setLeftItem,
        setRightItem,
        LeftItem
      }}
    >
      {children}
    </DrugsContext.Provider>
  );
};
