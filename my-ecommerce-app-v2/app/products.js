import React from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { useRouter } from "expo-router";
import styles from "./commonStyles";

const products = [
  {
    id: "1",
    name: "MCLAREN 750S",
    price: 85000000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/red-mclaren-750s-sports-car-WXWgQTUgK9Zr1nQkPKycirr2k5o8qa.jpg",
  },
  {
    id: "2",
    name: "LAMBORGHINI AVENTADOR",
    price: 120000000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/yellow-mclaren-750s-sports-car-T6tGK4MyPm1IK4fHcSc9qLkk6ZeTcL.jpg",
  },
  {
    id: "3",
    name: "FERRARI SF90",
    price: 150000000,
    image: "https://via.placeholder.com/400x300",
  },
];

export default function ProductsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardBody}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>Ksh {item.price.toLocaleString()}</Text>
              <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
                <View style={{ flex: 1 }}>
                  <View style={styles.btnPrimary}>
                    <Button title="Book Now" color="#fff" onPress={() => {}} />
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.btnSecondary}>
                    <Button
                      title="Details"
                      color="#dc2626"
                      onPress={() => router.push(`/products/${item.id}`)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
