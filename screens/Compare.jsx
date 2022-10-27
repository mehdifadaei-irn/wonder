import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { client } from "../lib/sanityClient";
import { keys } from "../constants/utils/items";
import ListItemPropsSearch from "../components/ListItemPropsSearch";
import { DrugsContext } from "../context/context-store";
import CompareBox from "../components/CompareBox";

const Compare = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("screen");

  const { rightItem, setLeftItem, setRightItem, LeftItem } =
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
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginBottom: "7%",
          }}
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
            اپلیکیشن جستجوی دارو
          </Text>
          <Image
            source={require("../assets/png/logo.png")}
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
            }}
          />
        </View>
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
                  borderWidth: 1,
                  width: "60%",
                  height: "9%",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "90%",
                }}
                onPress={() =>
                  navigation.navigate("choose", { witch: "right" })
                }
              >
                <Text
                  style={{
                    fontFamily: "VazirBold",
                    color: "#33333396",
                  }}
                >
                  انتخاب دارو
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <CompareBox title={rightItem} LOR={'right'} />
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
                  borderWidth: 1,
                  width: "60%",
                  height: "9%",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "90%",
                }}
                onPress={() => navigation.navigate("choose", { witch: "left" })}
              >
                <Text
                  style={{
                    fontFamily: "VazirBold",
                    color: "#33333396",
                  }}
                >
                  انتخاب دارو
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <CompareBox title={LeftItem} LOR={'left'} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Compare;
