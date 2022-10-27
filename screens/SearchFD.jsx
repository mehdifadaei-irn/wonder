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
import React, { useEffect, useState } from "react";
import Styles, { COLORS } from "../constants/styles/Styles";

import { client } from "../lib/sanityClient";
import ListItem2Cols from "../components/ListItem2Cols";

const SearchFD = ({ navigation, route }) => {
  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(true);
  const { width, height } = Dimensions.get("screen");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "excipients" && ${route.params?.name}==true] | order(title asc){
                title
            }`
      )
      .then((data) => {
        setDatas(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => console.log(`errorDadash`));
  }, []);

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

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          marginLeft: "5%",
          marginTop: "-9%",
        }}
      >
        {route.params?.name}
      </Text>
      {loading ? (
        <View>
          <Text>loading.....</Text>
        </View>
      ) : (
        <View>
          <FlatList
            columnWrapperStyle={{ justifyContent: "space-around" }}
            numColumns={2}
            data={datas}
            style={{
              height: height
            }}
            renderItem={({ item }) => {
              return <ListItem2Cols item={item} />;
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchFD;
