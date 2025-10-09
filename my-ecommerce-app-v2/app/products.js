import React from "react";
import { View, Text, Button, FlatList, Image, StyleSheet } from "react-native";

const products = [
  { id: "1", name: "Wireless Earbuds", price: "2500", image: "https://via.placeholder.com/150" },
  { id: "2", name: "Smart Watch", price: "4500", image: "https://via.placeholder.com/150" },
  { id: "3", name: "Bluetooth Speaker", price: "3500", image: "https://via.placeholder.com/150" },
];

export default function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Ksh {item.price}</Text>
            <Button title="Add to Cart" color="#007bff" onPress={() => navigation.navigate("Cart")} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    color: "green",
    marginVertical: 5,
  },
});
