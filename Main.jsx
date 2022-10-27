import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SearchDrug from "./screens/SearchDrug";
import SearchFeature from "./screens/SearchFeature";
import Compare from "./screens/Compare";
// import ContactUs from "./screens/ContactUs";
import ContactUs from "./screens/ContactUs";
import SearchDF from "./screens/SearchDF";
import SearchFD from "./screens/SearchFD";
import { DrugsContext } from "./context/context-store";
import Choose from "./screens/Choose";

const Stack = createNativeStackNavigator();

const Main = () => {
  const test = useContext(DrugsContext);

  if(!test.fontsLoaded) {
    return <View>
      <Text>hell</Text>
    </View>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="searchDrug" component={SearchDrug} />
        <Stack.Screen name="searchDF" component={SearchDF} />
        <Stack.Screen name="searchFeatur" component={SearchFeature} />
        <Stack.Screen name="searchFD" component={SearchFD} />
        <Stack.Screen name="contactUs" component={ContactUs} />
        <Stack.Screen name="compare" component={Compare} />
        <Stack.Screen name="choose" component={Choose}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
