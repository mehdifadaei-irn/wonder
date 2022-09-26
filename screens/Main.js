import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Notification, Plus, Search, Profile } from "./tabs/index";
import { MainContext } from "../context/context-store";
import TabBarIcon from "../comps/TabBarIcon";

const tabs = createBottomTabNavigator();

export default function Main({ route }) {
  const { theme } = useContext(MainContext);

  return (
    <NavigationContainer>
      <tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabel: "",
          tabBarStyle: { backgroundColor: theme.bg_color, borderTopWidth: 0 },
          tabBarIcon: ({ focused, color, size }) => {
            let rn = route.name;

            return <TabBarIcon focused={focused}  iconName={rn} />;
          },
        })}
        initialRouteName="profile"
      >
        <tabs.Screen
          name="home"
          component={Home}
        />
        <tabs.Screen name="search" component={Search} />
        <tabs.Screen name="plus" component={Plus} />
        <tabs.Screen name="notification" component={Notification} />
        <tabs.Screen name="profile" component={Profile} />
      </tabs.Navigator>
    </NavigationContainer>
  );
}
