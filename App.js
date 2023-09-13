import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "http://localhost:5173" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});
