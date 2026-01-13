import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import styles from "./commonStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function CartScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
        <Text style={styles.title}>🛒 Your Cart is Empty</Text>
        <Text style={styles.subtitle}>Start adding items to see them here.</Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={styles.btnPrimary}>
            <Button title="Back to Products" color="#fff" onPress={() => router.push('/products')} />
          </View>
        </View>
      </View>
      <Footer minimal={true} />
    </View>
  );
}

