import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  useWindowDimensions,
  Animated,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./commonStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MOCK_PRODUCT = {
  id: "porsche-911",
  name: "Tagra-4 — 911 Carrera",
  basePrice: 276000,
  images: [
    "https://i.pinimg.com/736x/5f/2e/20/5f2e20080873abc0deae8d14ff09aba1.jpg",
  ],
  wheels: [
    { id: "w1", name: "Classic Rims", add: 0 },
    { id: "w2", name: "Spyder Rims", add: 3403 },
    { id: "w3", name: "Sport Rims", add: 8100 },
  ],
  drives: [
    { id: "2wd", name: "2WD", add: 0 },
    { id: "4wd", name: "4WD", add: 8100 },
  ],
  accessories: [
    { id: "a1", name: "Car Cover", add: 120 },
    { id: "a2", name: "Extended Warranty", add: 2499 },
    { id: "a3", name: "Premium Sound", add: 899 },
  ],
};

export default function CartScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  const [cartItems, setCartItems] = useState([
    {
      product: MOCK_PRODUCT,
      qty: 1,
      selectedWheel: MOCK_PRODUCT.wheels[1].id,
      selectedDrive: MOCK_PRODUCT.drives[0].id,
      accessories: {},
    },
  ]);

  // Animated values for each cart item (mount animations)
  const animsRef = useRef([]);
  if (animsRef.current.length < cartItems.length) {
    for (let i = animsRef.current.length; i < cartItems.length; i++) {
      animsRef.current[i] = new Animated.Value(0);
    }
  }

  useEffect(() => {
    const toRun = animsRef.current.slice(0, cartItems.length).map((av) => Animated.timing(av, { toValue: 1, duration: 450, useNativeDriver: true }));
    Animated.stagger(120, toRun).start();
  }, [cartItems.length]);

  function updateItem(idx, patch) {
    setCartItems((s) => s.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  }

  function toggleAccessory(idx, accId) {
    setCartItems((s) =>
      s.map((it, i) => {
        if (i !== idx) return it;
        const next = { ...it };
        next.accessories = { ...(next.accessories || {}) };
        next.accessories[accId] = !next.accessories[accId];
        return next;
      })
    );
  }

  const totals = useMemo(() => {
    let subtotal = 0;
    cartItems.forEach((it) => {
      const base = it.product.basePrice;
      const wheelAdd = it.product.wheels.find((w) => w.id === it.selectedWheel)?.add || 0;
      const driveAdd = it.product.drives.find((d) => d.id === it.selectedDrive)?.add || 0;
      const accAdd = Object.keys(it.accessories || {}).reduce((sum, k) => {
        return sum + ((it.accessories[k] && it.product.accessories.find((a) => a.id === k)?.add) || 0);
      }, 0);
      const itemTotal = (base + wheelAdd + driveAdd + accAdd) * it.qty;
      subtotal += itemTotal;
    });
    const tax = Math.round(subtotal * 0.12);
    const shipping = subtotal > 0 ? 199 : 0;
    const grand = subtotal + tax + shipping;
    return { subtotal, tax, shipping, grand };
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
          <Text style={styles.title}>🛒 Your Cart is Empty</Text>
          <Text style={styles.subtitle}>Start adding items to see them here.</Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <View style={styles.btnPrimary}>
              <Button title="Back to Products" color="#fff" onPress={() => router.push("/products")} />
            </View>
          </View>
        </View>
        <Footer minimal={true} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ padding: 20 }}>
        {cartItems.map((it, idx) => {
          const anim = animsRef.current[idx] || new Animated.Value(1);
          const cardStyle = {
            opacity: anim,
            transform: [{ scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.98, 1] }) }],
          };
          return (
            <Animated.View key={it.product.id} style={[styles.card, local.card, cardStyle]}>
              <View style={[local.previewRow, !isDesktop && local.previewColumn]}>
                <Image
                  source={{ uri: it.product.images[0] }}
                  style={[local.previewImage, !isDesktop && local.previewImageMobile]}
                  resizeMode="cover"
                />
                <View style={local.infoColumn}>
                <Text style={styles.name}>{it.product.name}</Text>
                <Text style={styles.price}>sh {it.product.basePrice.toLocaleString()}</Text>
                <View style={{ flexDirection: "row", gap: 10, marginVertical: 8 }}>
                  <TouchableOpacity
                    onPress={() => updateItem(idx, { qty: Math.max(1, it.qty - 1) })}
                    style={local.qtyBtn}
                  >
                    <Text style={local.qtyBtnText}>−</Text>
                  </TouchableOpacity>
                  <View style={local.qtyDisplay}>
                    <Text style={local.qtyText}>{it.qty}</Text>
                  </View>
                  <TouchableOpacity onPress={() => updateItem(idx, { qty: it.qty + 1 })} style={local.qtyBtn}>
                    <Text style={local.qtyBtnText}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text style={{ color: "#9ca3af", marginBottom: 6 }}>Wheels</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8 }}>
                  {it.product.wheels.map((w) => {
                    const active = w.id === it.selectedWheel;
                    return (
                      <Pressable
                        key={w.id}
                        onPress={() => updateItem(idx, { selectedWheel: w.id })}
                        style={({ pressed }) => [
                          local.optionChip,
                          active && local.optionChipActive,
                          pressed && local.optionChipPressed,
                        ]}
                      >
                        <Text style={[local.optionText, active && local.optionTextActive]}>{w.name}</Text>
                        {w.add > 0 && <Text style={local.optionAdd}>+sh {w.add.toLocaleString()}</Text>}
                      </Pressable>
                    );
                  })}
                </ScrollView>

                <Text style={{ color: "#9ca3af", marginBottom: 6 }}>Drive</Text>
                <View style={{ flexDirection: "row", gap: 8, marginBottom: 8 }}>
                  {it.product.drives.map((d) => {
                    const active = d.id === it.selectedDrive;
                    return (
                      <Pressable
                        key={d.id}
                        onPress={() => updateItem(idx, { selectedDrive: d.id })}
                        style={({ pressed }) => [local.driveBtn, active && local.driveBtnActive, pressed && local.driveBtnPressed]}
                      >
                        <Text style={[local.driveText, active && local.driveTextActive]}>{d.name}</Text>
                      </Pressable>
                    );
                  })}
                </View>

                <Text style={{ color: "#9ca3af", marginBottom: 6 }}>Accessories</Text>
                {it.product.accessories.map((a) => (
                  <View key={a.id} style={local.accessoryRow}>
                    <Text style={{ color: "#fff" }}>{a.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Text style={{ color: "#9ca3af", marginRight: 8 }}>+sh {a.add.toLocaleString()}</Text>
                      <Switch
                        value={!!it.accessories[a.id]}
                        onValueChange={() => toggleAccessory(idx, a.id)}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </Animated.View>
          );
        })}

        <View style={[styles.card, local.summaryCard, isDesktop ? { alignSelf: 'flex-end', width: 520 } : null]}>
          <Text style={[styles.name, { marginBottom: 8 }]}>Order Summary</Text>
          <View style={local.row}><Text style={local.label}>Subtotal</Text><Text style={local.value}>sh {totals.subtotal.toLocaleString()}</Text></View>
          <View style={local.row}><Text style={local.label}>Tax (12%)</Text><Text style={local.value}>sh {totals.tax.toLocaleString()}</Text></View>
          <View style={local.row}><Text style={local.label}>Shipping</Text><Text style={local.value}>sh {totals.shipping.toLocaleString()}</Text></View>
          <View style={local.row}><Text style={local.label}>Total</Text><Text style={local.total}>sh {totals.grand.toLocaleString()}</Text></View>
          <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.btnPrimary} onPress={() => router.push('/checkout')}>
                <Text style={styles.btnPrimaryText}>Checkout</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: 120 }}>
              <TouchableOpacity style={styles.btnSecondary} onPress={() => router.push('/products')}>
                <Text style={styles.btnSecondaryText}>Continue Shopping</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer minimal={true} />
    </View>
  );
}

const local = StyleSheet.create({
  card: {
    padding: 12,
  },
  previewRow: {
    flexDirection: "row",
    gap: 12,
  },
  previewImage: {
    width: 320,
    height: 190,
    borderRadius: 12,
    backgroundColor: "#111",
  },
  infoColumn: {
    flex: 1,
    paddingLeft: 12,
  },
  qtyBtn: {
    backgroundColor: "#272727",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: { color: "#fff", fontSize: 20, fontWeight: "700" },
  qtyDisplay: { paddingHorizontal: 12, justifyContent: "center" },
  qtyText: { color: "#fff", fontSize: 16 },
  optionChip: {
    backgroundColor: "#0f0f0f",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
  },
  optionChipActive: { backgroundColor: "#dc2626" },
  optionText: { color: "#cbd5e1", fontWeight: "600" },
  optionTextActive: { color: "#fff" },
  optionAdd: { color: "#fff", fontSize: 12, marginTop: 4 },
  driveBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    backgroundColor: "#0f0f0f",
  },
  driveBtnActive: { backgroundColor: "#111827", borderColor: "#fff" },
  driveText: { color: "#cbd5e1" },
  driveTextActive: { color: "#fff", fontWeight: "700" },
  accessoryRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 8 },
  summaryCard: { padding: 16, marginTop: 16 },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 6 },
  label: { color: "#9ca3af" },
  value: { color: "#fff", fontWeight: "700" },
  total: { color: "#dc2626", fontWeight: "900", fontSize: 18 },
  previewColumn: { flexDirection: 'column' },
  previewImageMobile: { width: '100%', height: 220, marginBottom: 12 },
  optionChipPressed: { transform: [{ scale: 0.98 }], opacity: 0.95 },
  driveBtnPressed: { transform: [{ scale: 0.98 }], opacity: 0.95 },
});

