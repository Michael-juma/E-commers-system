import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import styles from "../commonStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../data/products";

export default function ProductDetail() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const { id } = params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ padding: 24 }}>
          <Text style={styles.name}>Product not found</Text>
          <TouchableOpacity style={[styles.btnSecondary, isDesktop && styles.btnSecondaryDesktop]} onPress={() => router.back()}>
            <Text style={styles.btnSecondaryText}>Back</Text>
          </TouchableOpacity>
        </View>
        <Footer minimal={true} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Image source={{ uri: product.image }} style={[styles.imageLarge]} resizeMode="cover" />

        {/* Gallery */}
        {product.gallery && product.gallery.length > 0 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
            {product.gallery.map((g, i) => (
              <Image key={i} source={{ uri: g }} style={[styles.galleryImage, isDesktop && styles.galleryImageDesktop]} />
            ))}
          </ScrollView>
        )}

        {/* Exterior Images */}
        {product.exteriorImages && product.exteriorImages.length > 0 && (
          <View style={{ marginTop: 18 }}>
            <Text style={styles.specTitle}>Exterior</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
              {product.exteriorImages.map((uri, i) => (
                <Image key={`ext-${i}`} source={{ uri }} style={[styles.galleryImage, isDesktop && styles.galleryImageDesktop]} />
              ))}
            </ScrollView>
          </View>
        )}

        {/* Interior Images */}
        {product.interiorImages && product.interiorImages.length > 0 && (
          <View style={{ marginTop: 18 }}>
            <Text style={styles.specTitle}>Interior</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
              {product.interiorImages.map((uri, i) => (
                <Image key={`int-${i}`} source={{ uri }} style={[styles.galleryImage, isDesktop && styles.galleryImageDesktop]} />
              ))}
            </ScrollView>
          </View>
        )}

        <View style={{ marginTop: 16 }}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>Ksh {product.price.toLocaleString()}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={{ marginTop: 18 }}>
            <Text style={styles.specTitle}>Specifications</Text>
            {Object.entries(product.specs || {}).map(([k, v]) => (
              <Text key={k} style={styles.specItem}>{`${k.charAt(0).toUpperCase() + k.slice(1)}: ${Array.isArray(v) ? v.join(', ') : v}`}</Text>
            ))}
          </View>

          <View style={{ marginTop: 18 }}>
            <Text style={styles.specTitle}>Features</Text>
            {product.features && product.features.map((f, idx) => (
              <Text key={idx} style={styles.featureItem}>• {f}</Text>
            ))}
          </View>

          <View style={{ marginTop: 18 }}>
            <Text style={styles.specTitle}>Dealer</Text>
            <Text style={styles.dealerText}>{product.dealer?.name}</Text>
            <Text style={styles.dealerText}>{product.dealer?.location}</Text>
            <Text style={styles.dealerText}>{product.dealer?.contact}</Text>
          </View>

          <View style={{ marginTop: 20, flexDirection: 'row', gap: 12 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={[styles.btnPrimary, isDesktop && styles.btnPrimaryDesktop]} onPress={() => {}}>
                <Text style={styles.btnPrimaryText}>Book Now</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={[styles.btnSecondary, isDesktop && styles.btnSecondaryDesktop]} onPress={() => router.back()}>
                <Text style={styles.btnSecondaryText}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer minimal={true} />
    </View>
  );
}
