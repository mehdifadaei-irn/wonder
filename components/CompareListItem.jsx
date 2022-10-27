import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrugsContext } from "../context/context-store";

const { width, height } = Dimensions.get("screen");

const CompareListItem = ({ item, witch }) => {
  const navigation = useNavigation();
  const { setRightItem, setLeftItem } = useContext(DrugsContext);
  function Clicked() {
    console.log("====================================");
    console.log("Clicked");
    console.log("====================================");
    if (witch == "right") {
      setRightItem(item.title);
    } else {
      setLeftItem(item.title);
    }
    console.log("====================================");
    console.log("de");
    console.log("====================================");
    navigation.navigate("compare");
  }

  return (
    <TouchableOpacity
      onPress={Clicked}
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "93%",
          height: width / 2.8,
          elevation: 10,
          alignItems: "center",
          borderRadius: 10,
          elevation: 3,
          marginBottom: "2%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: "8%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            maxWidth: 200
          }}
        >
          {item.title}
        </Text>
        <Image
          source={require("../assets/png/drug.png")}
          style={{
            width: 60,
            height: 70,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CompareListItem;

const styles = StyleSheet.create({});
