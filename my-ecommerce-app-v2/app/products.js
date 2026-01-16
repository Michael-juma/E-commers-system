import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, useWindowDimensions, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import styles from "./commonStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import products from "./data/products";

export default function ProductsScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;
  const numColumns = isDesktop ? 3 : isTablet ? 2 : 1;

  // Ensure at least 4 cards on the products listing by repeating products if needed
  const take = 4;
  const displayed = [];
  for (let i = 0; i < take; i++) {
    const p = products[i % products.length];
    displayed.push({ ...p, key: `${p.id}-${i}` });
  }
  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      <Header />
      {/* Hero Section for Products page */}
      {products[0] && (
        <ImageBackground source={{ uri: products[0].image }} style={[styles.heroProduct, isDesktop && styles.heroProductDesktop]}>
          <View style={styles.heroOverlay}>
            <Text style={styles.heroProductTitle}>Admire Top Supercars</Text>
            <Text style={styles.heroProductSubtitle}>Explore features, view galleries, and take action on cars you love.</Text>
            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <TouchableOpacity style={[styles.btnPrimary, isDesktop && styles.btnPrimaryDesktop]} onPress={() => router.push(`/products/${products[0].id}`)}>
                <Text style={styles.btnPrimaryText}>View Featured</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnSecondary, isDesktop && styles.btnSecondaryDesktop, { marginLeft: 12 }]} onPress={() => {}}>
                <Text style={styles.btnSecondaryText}>Browse All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
      <FlatList
        data={displayed}
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
                <View style={{ flexDirection: "row", marginTop: 12 }}>
                  <View style={{ flex: 1, marginRight: 8 }}>
                    <TouchableOpacity style={styles.btnPrimary} onPress={() => {}}>
                      <Text style={styles.btnPrimaryText}>Book Now</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.btnSecondary} onPress={() => router.push(`/products/${item.id}`)}>
                      <Text style={styles.btnSecondaryText}>Details</Text>
                    </TouchableOpacity>
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
