import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../../context/context-store";

export default function Plus() {
  const {theme} = useContext(MainContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.bg_color,
      }}
    >
      <Text>Plus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
