import React from "react";
import { View, Text, FlatList, Image, Button, TouchableOpacity, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
import styles from "./commonStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;
  const numColumns = isDesktop ? 3 : isTablet ? 2 : 1;

  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={numColumns > 1 ? { justifyContent: 'space-between' } : undefined}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: numColumns > 1 ? 8 : 0, maxWidth: isDesktop ? 360 : '100%' }}>
            <TouchableOpacity activeOpacity={0.92} style={styles.card} onPress={() => router.push(`/products/${item.id}`)}>
              <View style={styles.cardHeader}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.priceBadge}>
                  <Text style={styles.priceBadgeText}>Ksh {item.price.toLocaleString()}</Text>
                </View>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryBadgeText}>Supercar</Text>
                </View>
              </View>
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
            </TouchableOpacity>
          </View>
        )}
      />
      <Footer minimal={true} />
    </View>
  );
}
