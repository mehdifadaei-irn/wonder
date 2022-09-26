import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../../context/context-store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileImage from "../profile/stacks/ProfileImage";
import ProfileEdit from "../profile/stacks/ProfileEdit";
import ProfileHome from "../profile/stacks/ProfileHome";
import ProfileSetting from "../profile/stacks/ProfileSetting";
// import ProfileEdit from "../profile";

const Stack = createNativeStackNavigator();

export default function Profile() {
  const { theme } = useContext(MainContext);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="profileHome" component={ProfileHome} />
        <Stack.Screen name="profileEdit" component={ProfileEdit} />
        <Stack.Screen name="profileImage" component={ProfileImage} />
        <Stack.Screen name="profileSetting" component={ProfileSetting} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4343",
  },
});
