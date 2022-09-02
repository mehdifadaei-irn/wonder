import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../../context/context-store";

export default function Profile() {
  const { theme } = useContext(MainContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.bg_color,
      }}
    >
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#4343',
  },
});
