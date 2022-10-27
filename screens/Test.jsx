import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.log(e));
  }, []);

  function LS() {
    console.log(data);
  }

  return (
    <View>
      <Text>Test</Text>
      <Button title="ls" onPress={LS} />
    </View>
  );
};

export default Test;
