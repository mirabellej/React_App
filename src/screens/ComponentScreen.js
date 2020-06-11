import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Mirabelle";
  return(
    <View>
    <Text style={styles.bigText}>Welcome to React</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: 20
  },
  bigText:{
    fontSize: 45
  }
});

export default ComponentScreen;
