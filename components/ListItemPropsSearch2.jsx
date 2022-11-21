import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import React from "react";
import Styles from "../constants/styles/Styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";

const ListItemPropsSearch2 = ({ src }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      // onPress={() => navigation.navigate("Search", { doSearch: src })}
      style={{
        flexDirection: "row",
        width: "100%",
      }}
      onLongPress={async () => {
        await Clipboard.setStringAsync(src);
        ToastAndroid.showWithGravityAndOffset(
          "Copyied",
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          0,
          100
        );
      }}
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

export default ListItemPropsSearch2;
