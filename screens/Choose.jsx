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

const Choose = ({route}) => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const test = useContext(DrugsContext);
  const [myData, setMyData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (input) {
      let newList = test.mainDataE.filter((d) =>
        d.title.toLowerCase().includes(input)
      );
      setMyData(newList);
    }
    if (!input && test.mainDataE) {
      client
        .fetch(
          `*[_type == "excipients"] | order(title asc){
            _id,
            title,
          }`
        )
        .then((data) => {
          setMyData(data);
          test.setMainDataE(data);
          setLoading(false);
        })
        .catch((error) => console.log(`errorDadash`));
    }
    if (!test.mainDataE) {
      setMyData(test.mainDataE);
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
            fontFamily: "VazirBold",
            marginRight: "5%",
          }}
        >
          انتخاب دارو برای مقایسه
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="جستجو"
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
            marginTop: '2%'
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
                marginTop: 8
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Choose;
