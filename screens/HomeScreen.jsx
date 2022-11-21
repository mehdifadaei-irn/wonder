import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";

const { height, width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={[
            {
              width: "82%",
              height: height / 3,
              marginTop: "14%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            },
          ]}
        >
          <View style={{ width: "50%", height: "80%" }}>
            <Pressable
              style={({ pressed }) => [
                {
                  width: "96%",
                  height: height / 7.5,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                },
                {
                  borderWidth: 1,
                },
              ]}
              onPress={() => navigation.navigate("searchDrug")}
            >
              <Image
                source={require("../assets/png/vec2.png")}
                resizeMode="contain"
                style={{
                  height: "46%",
                  width: "46%",
                  marginTop: "10%",
                }}
              />
              <Text
                style={{
                  color: "#000",
                  marginBottom: "5%",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Excipients
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  width: "96%",
                  height: height / 7.5,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                  marginTop: "13%",
                },
                {
                  borderWidth: 1,
                },
              ]}
              onPress={() => navigation.navigate("compare")}
            >
              <Ionicons
                name="swap-horizontal"
                size={45}
                color="#2ab9cc"
                style={{
                  marginTop: "8%",
                  marginRight: 9,
                }}
              />
              <Text
                style={{
                  color: "#000",
                  marginBottom: "5%",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Compare
              </Text>
            </Pressable>
          </View>
          <View style={{ width: "50%", height: "80%" }}>
            <Pressable
              style={({ pressed }) => [
                {
                  width: "96%",
                  height: height / 7.5,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                },
                {
                  borderWidth: 1,
                },
              ]}
              onPress={() => navigation.navigate("searchFeatur")}
            >
              <Image
                source={require("../assets/png/vec1.png")}
                resizeMode="contain"
                style={{
                  height: "46%",
                  width: "46%",
                  marginTop: "10%",
                }}
              />
              <Text
                style={{
                  color: "#000",
                  marginBottom: "5%",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Functional category
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  width: "96%",
                  height: height / 7.5,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                  marginTop: "13%",
                },
                {
                  borderWidth: 1,
                },
              ]}
              onPress={() => navigation.navigate("contactUs")}
            >
              <Image
                source={require("../assets/png/vec3.png")}
                resizeMode="contain"
                style={{
                  height: "43%",
                  width: "43%",
                  marginTop: "10%",
                }}
              />
              <Text
                style={{
                  color: "#000",
                  marginBottom: "5%",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Contact Us
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <ImageBackground
        source={require("../assets/png/footer1.png")}
        style={{
          width: width,
          height: "63%",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
        resizeMode="contain"
      >
        <Text
          style={{
            paddingBottom: "2%",
            color: "#fff",
            fontWeight: "bold",
            width: "100%",
            width: width,
            marginTop: "-14%",
            marginLeft: "2%",
          }}
        >
          Handbook of Pharmaceutical Excipients (Sixth edition)
        </Text>
        <Text
          style={{
            paddingBottom: "6%",
            color: "#fff",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          Prepared by: Ehsan Taghizadeh Davoudi (PhD of Pharmaceutics)
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
