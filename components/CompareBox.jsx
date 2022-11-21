import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrugsContext } from "../context/context-store";
import { client } from "../lib/sanityClient";
import { ScrollView } from "react-native";
import { keys, props } from "../constants/utils/items";

const CompareBox = ({ title, LOR }) => {
  const { width, height } = Dimensions.get("screen");
  const [featuresL, setFeaturesL] = useState([]);
  const [features, setFeatures] = useState([]);

  const navigation = useNavigation();
  const { setLeftItem, setRightItem, rightItem, LeftItem } =
    useContext(DrugsContext);

  useEffect(() => {
    if (rightItem) {
      props.data.map((prop) => {
        if (prop.title == rightItem) {
          setFeatures(prop.props);
        }
      });
    } else {
      console.log("right is empty");
    }
    if (LeftItem) {
      props.data.map((prop) => {
        if (prop.title == LeftItem) {
          setFeaturesL(prop.props);
        }
      });
    } else {
      console.log("left is empty");
    }
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (LOR == "right") {
            setRightItem("");
            setFeatures([]);
          } else {
            setLeftItem("");
            setFeaturesL([]);
          }
        }}
        style={{
          zIndex: 20,
          width: width / 5,
        }}
      >
        <Image
          source={require("../assets/png/zarb2.png")}
          style={{
            width: 26,
            height: 26,
            marginLeft: 6,
          }}
        />
      </TouchableOpacity>
      <ImageBackground
        source={require("../assets/png/Group29.png")}
        style={{
          width: width / 1.6 + 10,
          height: height / 4.8,
          position: "absolute",
          right: "-16%",
          alignItems: "center",
          justifyContent: "center",
        }}
        resizeMode={"cover"}
      >
        <Text
          style={{
            marginTop: "18%",
            fontSize: 16,
            maxWidth: 150,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </ImageBackground>
      <View
        style={{
          maxWidth: "82%",
          marginTop: "23%",
          height: height / 1.5,
          backgroundColor: "#2ab9cc30",
          marginLeft: "9%",
          paddingTop: "45%",
        }}
      >
        <ScrollView 
        contentContainerStyle={{
          height: height *(features.length >= 10 ? 12: 8)/11,
          alignItems: 'center'
        }}
        >
          {LOR == "right"
            ? features.map((feature, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginTop: 20,
                      borderWidth: 2,
                      borderRadius: 10,
                      width: "90%",
                      height: "7%",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      borderColor: "#2ab9cc",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>{feature}</Text>
                  </View>
                );
              })
            : featuresL.map((feature, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginTop: 20,
                      borderWidth: 2,
                      borderRadius: 10,
                      width: "90%",
                      height: "7%",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      borderColor: "#2ab9cc",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>{feature}</Text>
                  </View>
                );
              })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CompareBox;
