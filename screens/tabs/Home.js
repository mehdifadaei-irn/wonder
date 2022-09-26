import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../../context/context-store";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  const { theme } = useContext(MainContext);
  return (
    <View
      style={{
        width: '100%',
        position: "absolute",
        flexDirection: "row",
        marginTop: 100,
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "#3333",
      }}
    >
      <Text
        style={{
          color: "#000",
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Profile
      </Text>
      <View>
        <Ionicons name="settings-outline" size={30} />
      </View>
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
