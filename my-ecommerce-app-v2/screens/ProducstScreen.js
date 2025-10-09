import React from "react";
import { View, Text, Button } from "react-native";

export default function ProductScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Products List Coming Soon</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate("CartScreen")} />
    </View>
  );
}
