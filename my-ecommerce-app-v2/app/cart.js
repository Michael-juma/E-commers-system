import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart is Empty</Text>
      <Text style={styles.subtitle}>Start adding items to see them here.</Text>

      <Button
        title="Back to Products"
        color="#007bff"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#666",
    marginBottom: 20,
  },
});
