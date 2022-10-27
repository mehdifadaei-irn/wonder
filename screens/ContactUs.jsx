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
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { bgs, drugsData, icons, items } from "../constants/utils";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import ListItem from "../components/ListItem";
import Styles, { COLORS } from "../constants/styles/Styles";
import ListItem2Cols from "../components/ListItem2Cols";

import RFPercentage from "../constants/utils/ResponsiveScale";
import { TxtLst, TxtLstItms } from "../constants/utils/TxtLsts";

export default function ContactWithUs({ navigation, route }) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
  });
  const { width, height } = Dimensions.get("screen");

  if (!loaded) {
    return null;
  }

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
          <Image
            source={require("../assets/png/footer2.png")}
            resizeMode={"stretch"}
            style={{ height: height / 5.5, width: width }}
          />
        </View>
        <ImageBackground
          source={require("../assets/png/header.png")}
          style={{
            width: width,
            height: height / 5,
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
                flex: 1,
                alignItems: "flex-end",
                marginRight: "5%",
                marginTop: "5%",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: RFPercentage(2),
                    color: COLORS.BCG_WHITE,
                    fontFamily: "VazirBold",
                  }}
                >
                  اپلیکیشن جستجوی چیز
                </Text>
              </View>
              <View style={{ marginTop: "5%" }}>
                <Image
                  source={require("../assets/png/logo.png")}
                  resizeMode={"cover"}
                  style={{ width: RFPercentage(12), height: RFPercentage(12) }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            marginHorizontal: "10%",
            top: "-6%",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: RFPercentage(3.1),
              fontFamily: "VazirBold",
            }}
          >
            تماس با ما
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: "9%",
            marginVertical: "-10%",
            marginBottom: 0,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center",marginTop: '-1%' }}>
            <TxtLst
              RFPercentage={RFPercentage}
              COLORS={COLORS}
              headerTxt={" آدرس:"}
              decTxt={
                ":تهران، سهروردی جنوبی پایین‌تر از چهارراه ملایری پور نبش خیابان امین زاده پلاک 26"
              }
            />
            <TxtLst
              RFPercentage={RFPercentage}
              COLORS={COLORS}
              headerTxt={"تلفن:"}
              decTxt={"88327048-021"}
            />
            <TxtLst
              RFPercentage={RFPercentage}
              COLORS={COLORS}
              headerTxt={"ایمیل:"}
              decTxt={"info@Saminray.com"}
            />
          </View>
          <View style={{ marginVertical: "3%", fontFamily: "VazirBold" }}>
            <Text
              style={{ fontSize: RFPercentage(2), fontFamily: "VazirBold" }}
            >
              شرکت فناوری اطلاعات و ارتباطات{" "}
              <Text
                style={{
                  color: COLORS.PRIMARY,
                  fontSize: RFPercentage(2),
                  fontFamily: "VazirBold",
                }}
              >
                ثمین رای
              </Text>{" "}
              (سهامی خاص ) در آذرماه سال 1381 با هدف ارائه خدمات مهندسی در زمینه
              فناوری اطلاعات و ارتباطات توسط گروهی از متخصصان این صنعت تشکیل و
              با سازماندهی و ایجاد زیرساخت های مهارتی وارد عرصه فعالیت شد.
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: RFPercentage(2),fontFamily: "VazirBold",marginTop: '-4%' }}>
              فعایت های <Text style={{ color: COLORS.PRIMARY }}>ثمین رای</Text>{" "}
              در حوزه های:
            </Text>
            <View
              style={{
                marginTop: "1%",
                alignItems: "flex-end",
              }}
            >
              <TxtLstItms
                RFPercentage={RFPercentage}
                COLORS={COLORS}
                txt={"بانکداری"}
              />
              <TxtLstItms
                RFPercentage={RFPercentage}
                COLORS={COLORS}
                txt={"بانکداری نوین (الکترونیک)"}
              />
              <TxtLstItms
                RFPercentage={RFPercentage}
                COLORS={COLORS}
                txt={"سیستم مدیریت هوشمند (BMS)"}
              />
              <TxtLstItms
                RFPercentage={RFPercentage}
                COLORS={COLORS}
                txt={
                  "ارتباط و امنیت فنآوری اطلاعات و با اولویت ارا‌‌‌ئه خدمات مهندسی و بازرگانی حرفه ای"
                }
              />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: '-1%' }}>
          <Image
            source={require("../assets/png/samin.png")}
            resizeMode={"contain"}
            style={{
              width: RFPercentage(25),
              height: RFPercentage(15),
            }}
          />
        </View>
      </View>
    </>
  );
}
