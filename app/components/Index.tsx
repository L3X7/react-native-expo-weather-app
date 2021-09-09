import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherTenDaysList from "./weather-tendays-flatlist";

interface Props {
  navigation: any
}

export default class Index extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navigation}>
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableHighlight onPress={() => this.props.navigation.navigate('About')}>
              <Ionicons name="add" size={26} color="white"></Ionicons>
            </TouchableHighlight>
          </View>
          <View
            style={{
              flex: 3,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>San Salvador</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableHighlight onPress={() => alert("Options")}>
              <SimpleLineIcons
                name="options-vertical"
                size={20}
                color="white"
              />
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={{
            width: "auto",
            flex: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 80, color: "white" }}>16°C</Text>
          <Text style={{ fontSize: 20, color: "white" }}>Nublado</Text>
        </View>
        <WeatherTenDaysList></WeatherTenDaysList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    backgroundColor: "powderblue",
  },
  navigation: {
    flex: 1,
    flexDirection: "row",
  },
});
