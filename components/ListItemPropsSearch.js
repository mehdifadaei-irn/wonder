import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/styles";
import Styles from "../constants/styles/Styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ListItemPropsSearch = ({ src }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      // onPress={() => navigation.navigate("Search", { doSearch: src })}
      style={{
        flexDirection: "row",
        width: "100%",
      }}
      onPress={() => {navigation.navigate("searchFD",{
        name: src
      })}}
    >
      <View style={Styles.ListItemPropsSearch}>
        <Ionicons
          name="pricetag"
          size={26}
          color="#292524"
          style={{
            marginTop: "2%",
            marginRight: 9,
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 19 }}>{src}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItemPropsSearch;

const styles = StyleSheet.create({});
