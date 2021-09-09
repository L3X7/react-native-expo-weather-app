import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  FlatList,
  View,
} from "react-native";
import { Ionicons, SimpleLineIcons, Feather } from "@expo/vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./app/components/Index";
import About from "./app/components/About";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{title: 'Index', headerShown: false}} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
