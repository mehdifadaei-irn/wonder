import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/styles";

const FormInput = (props) => {
  const { placeholder, label, error, isPassword } = props;
  if (isPassword == true) {
    console.log(isPassword);
  }
  //   if(isPassword){}
  return (
    <View style={{ width: "90%" }}>
      <TextInput
        {...props}
        placeholderTextColor="#ffffff63"
        placeholder={placeholder}
        style={styles.input}
      />
      {isPassword ? (
        <TouchableOpacity style={{ position: "absolute", left: 300, top: 28 }}>
          <Text style={{ color: "white" }}>Show</Text>
        </TouchableOpacity>
      ) : null}
      <View style={{}}>
        {error ? (
          <Text style={{ color: "red", fontSize: 12 }}>{error}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // width: "90%",
    backgroundColor: COLORS.ITEM_BG_COLOR,

    // borderWidth: 1,
    // borderColor: "#ffffff",
    height: 55,
    color: "#5bbda5",
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 4,
    marginTop: 10,
  },
});

export default FormInput;
