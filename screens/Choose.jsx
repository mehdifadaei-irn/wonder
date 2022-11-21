import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { DrugsContext } from "../context/context-store";
import { useNavigation } from "@react-navigation/native";
import { client } from "../lib/sanityClient";
import CompareListItem from "../components/CompareListItem";
import { props } from "../constants/utils/items";

const Choose = ({ route }) => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const test = useContext(DrugsContext);
  const [myData, setMyData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (input) {
      let newList = test.mainDataE.filter((d) =>
        d.includes(input)
      );
      setMyData(newList);
    }
    if (!input && test.mainDataE) {
      let arr = [];
      props.data.map((p) => {
        arr.push(p.title);
      });
      setMyData(arr);
      test.setMainDataE(arr);
      setLoading(false);

    }
  }, [input]);

  return (
    <View>
      <View
        style={{
          backgroundColor: "#2ab9cc",
          width: "100%",
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            height: "35%",
            width: "20%",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/png/zarb1.png")}
            resizeMode={"contain"}
            style={{
              height: "75%",
              width: "70%",
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            marginRight: "5%",
            fontWeight: 'bold',
            fontSize: 20
          }}
        >
          Choose excipients for Compare!
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="search"
          value={input}
          onChangeText={(text) => setInput(text)}
          onClear={() => setInput("")}
          style={{
            flexDirection: "row-reverse",
            fontFamily: "VazirBold",
            borderWidth: 2,
            width: "93%",
            borderRadius: 20,
            paddingVertical: "1%",
            paddingHorizontal: "2%",
            borderColor: "#33333390",
            marginTop: "2%",
          }}
        />
      </View>

      {loading ? (
        <View>
          <Text>loading.....</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={myData}
            renderItem={({ item }) => {
              return <CompareListItem item={item} witch={route.params.witch} />;
            }}
            style={{
              marginTop: 8,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Choose;
