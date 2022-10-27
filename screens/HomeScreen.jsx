import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Pressable,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import { client } from "../lib/sanityClient";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const { height, width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  // useEffect(() => {
  //   console.log('dad');
  //   client
  //     .fetch(
  //       `*[_type == "excipients"]{
  //       _id
  //     }`
  //     )
  //     .then((data) => {
  //       console.log(data);
  //       console.log('nice');
  //     })
  //     .catch((error) => console.log(`errorDadash`));
  // }, []);
  const [datas, setDatas] = useState("k");
  // const { loading, data } = useFetch("https://fakestoreapi.com/products/1");
  // http://localhost:1337/api/drugs

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  function Clickd() {
    console.log("sta1231rt32");
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((e) => console.log(e));
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header />
      <Button title="c" onPress={Clickd} />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
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
                  width: "90%",
                  height: height / 8,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                },
                {
                  elevation: 1,
                  shadowColor: "#000",
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
                  marginBottom: "10%",
                  fontFamily: "VazirBold",
                  fontSize: 16,
                }}
              >
                جستجوی دارو
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  width: "90%",
                  height: height / 8,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                  marginTop: "13%",
                },
                {
                  elevation: 1,
                  shadowColor: "#000",
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
                  marginBottom: "10%",
                  fontFamily: "VazirBold",
                  fontSize: 16,
                }}
              >
                مقایسه
              </Text>
            </Pressable>
          </View>
          <View style={{ width: "50%", height: "80%" }}>
            <Pressable
              style={({ pressed }) => [
                {
                  width: "90%",
                  height: height / 8,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                },
                {
                  elevation: 1,
                  shadowColor: "#000",
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
                  marginBottom: "10%",
                  fontFamily: "VazirBold",
                  fontSize: 16,
                }}
              >
                جستجوی ویژگی
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  width: "90%",
                  height: height / 8,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: pressed ? "#33333320" : "transparent",
                  marginTop: "13%",
                },
                {
                  elevation: 1,
                  shadowColor: "#000",
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
                  marginBottom: "10%",
                  fontFamily: "VazirBold",
                  fontSize: 16,
                }}
              >
                تماس با ما
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
          paddingTop: "4%",
          paddingRight: "4%",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        resizeMode="contain"
      >
        <Text
          style={{
            paddingBottom: "6%",
            paddingRight: "3%",
            color: "#fff",
            fontFamily: "VazirBold",
          }}
        >
          منبع: Handbook of Pharmaceutical Excipients
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
