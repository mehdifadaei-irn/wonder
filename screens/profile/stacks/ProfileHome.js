import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MainContext } from "../../../context/context-store";

export default function ProfileHome({ navigation }) {
  const { theme } = useContext(MainContext);
  const goToSetting = () => {
    navigation.navigate("profileSetting");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.bg_color,
        marginTop: 42,
      }}
    >
      <View>
        <Image
          source={require("../../../assets/galaxy-7040416_960_720.png")}
          style={{
            height: 300,
            width: "100%",
          }}
        />
        <View
          style={{
            width: "100%",
            position: "absolute",
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 17,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 23,
              fontWeight: "bold",
            }}
          >
            Profile
          </Text>
          <Pressable
            style={{
              backgroundColor: "#33333370",
              borderRadius: 50,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={goToSetting}
          >
            <Ionicons name="settings-outline" size={23} color={"#fff"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
