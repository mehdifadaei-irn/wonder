import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/styles";

const { width, height } = Dimensions.get("screen");

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("Profile", {
          name: item.name,
          description: item.dec,
        })
      }
    >
      <View
        style={{
          width: "90%",
          borderRadius: 20,
          marginHorizontal: 20,
          marginVertical: 10,
          padding: 10,
          elevation: 6,
          backgroundColor: COLORS.BCG_WHITE,
          maxHeight: 110,
          minHeight: 110,
        }}
      >
        {/* <View style={{ marginBottom: 7 }}>
    <Text style={{ fontSize: 20, color: "tomato" }}>
    {item.name}
    </Text>
</View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ margin: 6, maxWidth: "50%" }}>
            <Text style={{ fontSize: 12, fontFamily: "Montserrat" }}>
              {item.dec}
            </Text>
          </View>

          <View style={{ width: "40%" }}>
            <View
              style={{
                borderWidth: 1.5,
                borderColor: COLORS.PRIMARY,
                height: 70,
                borderRadius: width / 30,
              }}
            ></View>
            <View
              style={{
                alignSelf: "flex-end",
                marginVertical: 3,
                marginHorizontal: 5,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
