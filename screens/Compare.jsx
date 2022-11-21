import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { DrugsContext } from "../context/context-store";
import CompareBox from "../components/CompareBox";

const Compare = ({ navigation, route }) => {
  const { width, height } = Dimensions.get("screen");


  const { rightItem,LeftItem } =
    useContext(DrugsContext);

  return (
    <View>
      <ImageBackground
        source={require("../assets/png/header.png")}
        resizeMode="cover"
        style={{
          width: width,
          height: height / 5,
          paddingTop: "4%",
          paddingRight: "4%",
          marginRight: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          opacity: 0.9,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/png/back.png")}
            resizeMode={"contain"}
            style={{
              width: width / 6,
              height: "30%",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginBottom: "7%",
          }}
          onPress={() => navigation.navigate("home")}
        >
          <Text
            style={{
              color: "#fff",
              marginLeft: "8%",
              marginTop: "4%",
              fontSize: 20,
              marginBottom: "2%",
              fontFamily: "VazirBold",
            }}
          >
            Search excipients App
          </Text>
          <Image
            source={require("../assets/png/logo.png")}
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          height: (height * 4) / 5,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: width / 2,
            borderRightWidth: 2,
            borderColor: "#2ab9cc",
          }}
        >
          {!rightItem ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  width: "65%",
                  height: "9%",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "99%",
                  borderColor: "#2ab9cc",
                }}
                onPress={() =>
                  navigation.navigate("choose", { witch: "right" })
                }
              >
                <Text
                  style={{
                    color: "#182f4e",
                    fontWeight: "bold",
                  }}
                >
                  Choose excipient
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <CompareBox title={rightItem} LOR={"right"} />
            </View>
          )}
        </View>
        <View
          style={{
            width: width / 2,
          }}
        >
          {!LeftItem ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  width: "65%",
                  height: "9%",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "99%",
                  borderColor: "#2ab9cc",
                }}
                onPress={() => navigation.navigate("choose", { witch: "left" })}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#182f4e",
                  }}
                >
                  Choose excipient
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <CompareBox title={LeftItem} LOR={"left"} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Compare;
