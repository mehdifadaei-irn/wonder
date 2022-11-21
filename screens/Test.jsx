import { View, Text, Button, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
// import { createClient } from "contentful";
import { props } from "../constants/utils/items";

const Test = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [data1, setData1] = useState([]);

  function LS() {
    props.data.map((prop) => {
      if (prop.title.toLowerCase() == input) {
        setData(prop.props);
      }
      console.log("2=======================2");
    });
  }
  function getD() {
    console.log(data);
  }

  let arr = [];
  function PPP() {
    props.data.map((prop) => {
      prop.props.map((d) => {
        if (d.toLowerCase() == input1) {
          arr.push(prop.title);
        }
      });
    });
    setData1(arr);
  }
  function getD1() {
    console.log(data1);
  }

  return (
    <View>
      <Text>Test</Text>
      <Button title="SearchD" onPress={LS} />
      <TextInput
        placeholder="Drugs"
        onChangeText={(text) => setInput(text)}
        onClear={() => setInput("")}
        value={input}
      />
      <Button title="Get" onPress={getD} />
      <Button title="get1" onPress={getD1} />

      <TextInput
        placeholder="Props"
        onChangeText={(text) => setInput1(text)}
        onClear={() => setInput1("")}
        value={input1}
      />
      <Button title="Props" onPress={PPP} />

      {data.map((d, index) => (
        <View key={index}>
          <Text>{d}</Text>
        </View>
      ))}
    </View>
  );
};

export default Test;
