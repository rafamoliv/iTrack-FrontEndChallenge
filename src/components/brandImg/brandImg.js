import React from "react";
import { Image, StyleSheet } from "react-native";

export default function UrlOption(props) {
  switch (props.value) {
    case "Gol":
      return <Image style={styles.image} source={require("~/assets/images/gol.png")} />;

    case "Uno":
      return <Image style={styles.image} source={require("~/assets/images/uno.png")} />;

    case "Palio":
      return <Image style={styles.image} source={require("~/assets/images/palio.png")} />;

    default:
      return <Image style={styles.image} source={require("~/assets/images/default.png")} />;
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 75,
    marginLeft: 10,
  },
});
