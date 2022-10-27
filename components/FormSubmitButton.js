import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../constants/styles";

const FormSubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting ? "#243f44" : COLORS.SECONDARY_COLOR;

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: "#fff" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    width: "96%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormSubmitButton;
