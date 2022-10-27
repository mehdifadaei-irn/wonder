import { View, Text } from "react-native";
import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MainContext } from "../context/context-store";

const TabBarIcon = ({ iconName, focused }) => {
  const { theme } = useContext(MainContext);
  let icon;

  if (iconName === "home") {
    icon = "home-outline";
  } else if (iconName === "plus") {
    icon = "add";
  } else if (iconName === "search") {
    icon = "search";
  } else if (iconName === "notification") {
    icon = "notifications-outline";
  } else if (iconName === "profile") {
    icon = "person-outline";
  }
  return (
    <View
      style={{
        backgroundColor: focused ? "#673ab7" : theme.item_bg_color,
        width: 41,
        height: 41,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons
        name={icon}
        size={28}
        color={focused ? "#d1c4e9" : theme.promary_color}
      />
    </View>
  );
};

export default TabBarIcon;
