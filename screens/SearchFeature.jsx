// Comparison

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { bgs, icons, items } from "../constants/utils";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import ListItem from "../components/ListItem";
import Styles, { COLORS } from "../constants/styles/Styles";
import ListItemPropsSearch from "../components/ListItemPropsSearch";
import { keys } from "../constants/utils/items";

export default function PropsSearch({ navigation, route }) {
  const [input, setInput] = useState("");
  const { width, height } = Dimensions.get("screen");

  const [features, setFeatures] = useState(keys);

  useEffect(() => {
    const newF = keys.filter((f, index) => f.toLowerCase().includes(input));
    setFeatures(newF);
  }, [input]);

  return (
    <>
      <StatusBar barStyle="default" />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.BCG_WHITE,
        }}
      >
        <View style={Styles.footer}>
          {/* <Image
            source={require("../assets/png/footer2.png")}
            resizeMode={"stretch"}
            style={{ height: height / 6, width: width }}
          /> */}
        </View>
        <ImageBackground
          source={require("../assets/png/header.png")}
          style={{
            width: width,
            height: height / 5,
            zIndex: 20,
          }}
          resizeMode={"cover"}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "55%",
                position: "absolute",
                top: "12%",
                left: 10,
                ...Styles.sectionStyle,
                flexDirection: "row-reverse",
              }}
            >
              <Image
                source={require("../assets/png/search.png")}
                style={{
                  width: "15%",
                  height: "83%",
                }}
                resizeMode="cover"
              />
              <TextInput
                placeholder="جستجو"
                value={input}
                onChangeText={(text) => setInput(text)}
                onClear={() => setInput("")}
                style={{
                  width: "80%",
                  flexDirection: "row-reverse",
                  fontFamily: "VazirBold",
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                marginRight: 20,
                marginTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    color: COLORS.BCG_WHITE,
                    fontFamily: "VazirBold",
                  }}
                >
                  اپلیکیشن جستجوی چیز
                </Text>
              </View>
              <View style={{ marginTop: "1%" }}>
                <Image
                  source={require("../assets/png/logo.png")}
                  resizeMode={"contain"}
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: "center",
                  }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            marginHorizontal: "5%",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 24,
              fontFamily: "VazirBold",
              marginTop: "-10%",
            }}
          >
            ویژگی ها
          </Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginBottom: 30,
          }}
          
        >
          {/* {route.params?.description.map((src, index) => { */}
          {features.map((src, index) => {
            return <ListItemPropsSearch src={src} key={index} />;
          })}
        </ScrollView>
      </View>
    </>
  );
}
