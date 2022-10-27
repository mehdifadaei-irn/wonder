import { View, Text } from "react-native";
import React from "react";
// import RFPercentage from "./ResponsiveScale";
// import { COLORS } from "../constants/styles";

export const TxtLst = (props) => {
  const COLORS = props.COLORS;
  const RFPercentage = props.RFPercentage;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "0%",
      }}
    >
      <Text
        style={{
          fontSize: RFPercentage(2.1),
          fontWeight: "800",
          fontFamily: "VazirBold",
        }}
      >
        {props.headerTxt}{props.decTxt}
      </Text>
    </View>
  );
};

export const TxtLstItms = (props) => {
  const COLORS = props.COLORS;
  const RFPercentage = props.RFPercentage;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: RFPercentage(1.7), fontFamily: "VazirBold" }}>
          {props.txt}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.PRIMARY,
          marginVertical: "2%",
          width: RFPercentage(1),
          height: RFPercentage(1),
          borderRadius: RFPercentage(1),
          marginLeft: "5%",
        }}
      ></View>
    </View>
  );
};
