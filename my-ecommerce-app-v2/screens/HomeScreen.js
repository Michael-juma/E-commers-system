// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Welcome to Our E-Commerce App!
      </Text>
      <Button
        title="View Products"
        onPress={() => navigation.navigate("ProductScreen")}
      />
    </View>
  );
}
