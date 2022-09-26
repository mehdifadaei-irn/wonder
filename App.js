import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MainContextProvider, { MainContext } from "./context/context-store";
import Main from "./screens/Main";

export default function App() {
  const {theme} = useContext(MainContext)
  return (
    <>
      <StatusBar style="light" animated={true} backgroundColor="#673ab7" currentHeight={'20px'} />
      <MainContextProvider>
        <View style={{ flex: 1, backgroundColor: "#333" }}>
          <Main/>
        </View>
      </MainContextProvider>
    </>
  );
}
