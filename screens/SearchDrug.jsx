import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { bgs, icons, items } from "../constants/utils";
import { useFonts } from "expo-font";
import Styles, { COLORS } from "../constants/styles/Styles";
import ListItem2Cols from "../components/ListItem2Cols";
import { DrugsContext } from "../context/context-store";
import { props } from "../constants/utils/items";
import * as ScreenOrientation from "expo-screen-orientation";

export default function SearchDrug({ navigation, route }) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
  });
  const { width, height } = Dimensions.get("screen");
  ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_DOWN);

  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState();
  const [input, setInput] = useState("");

  const test = useContext(DrugsContext);

  useEffect(() => {
    if (input) {
      let newList = test.mainDataE.filter((d) => d.includes(input));
      setMyData(newList);
    }
    if (!input && test.mainDataE) {
      let arr = [];
      props.data.map((prop) => {
        arr.push(prop.title);
      });
      test.setMainDataE(arr);
      setLoading(false);

      setMyData(arr.sort());
    }
    if (!test.mainDataE) {
      setMyData(test.mainDataE);
    }
  }, [input]);

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
            opacity: 0.9,
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
                placeholder="search"
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
                    marginRight: -10,
                  }}
                >
                  Search excipients App
                </Text>
              </View>
              <TouchableOpacity
                style={{ marginTop: "1%" }}
                onPress={() => navigation.navigate("home")}
              >
                <Image
                  source={require("../assets/png/logo.png")}
                  resizeMode={"contain"}
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            marginHorizontal: "10%",
            marginTop: "-10%",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 23,
              fontFamily: "VazirBold",
              marginBottom: 9,
            }}
          >
            All Excipients
          </Text>
        </View>

        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <View>
            <FlatList
              columnWrapperStyle={{ justifyContent: "space-around" }}
              numColumns={2}
              data={myData}
              renderItem={({ item }) => {
                return <ListItem2Cols item={item} />;
              }}
              style={{
                maxHeight: (height * 5) / 7,
              }}
            />
          </View>
        )}
      </View>
    </>
  );
}
