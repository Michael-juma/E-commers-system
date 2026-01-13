import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  return (
    <View style={styles.navbar}>
      <View style={[styles.navbarContainer, isDesktop && styles.navbarContainerDesktop]}>
        <Image
          source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/car-dealership-logo-shield-qD4sZ1FgcgbfiPbHZ4AcmQ9I0xHpPP.jpg" }}
          style={styles.logo}
          resizeMode="contain"
        />

        {isDesktop && (
          <View style={styles.desktopNav}>
            <Link href="/" asChild>
              <TouchableOpacity style={styles.navItem}>
                <Text style={[styles.navLink, styles.navLinkActive]}>Home</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/products" asChild>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navLink}>Products</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/cart" asChild>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navLink}>Cart</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/contact" asChild>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navLink}>Contact</Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}

        {isDesktop && (
          <View style={styles.desktopActions}>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.btnLoginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegister}>
              <Text style={styles.btnRegisterText}>Register</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isDesktop && (
          <TouchableOpacity style={styles.menuButton} onPress={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
        )}
      </View>

      {!isDesktop && mobileMenuOpen && (
        <View style={styles.mobileMenu}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.navItem}>
              <Text style={[styles.navLink, styles.navLinkActive]}>Home</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/products" asChild>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navLink}>Products</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/cart" asChild>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navLink}>Cart</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/contact" asChild>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navLink}>Contact</Text>
            </TouchableOpacity>
          </Link>
          <View style={styles.navActions}>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.btnLoginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegister}>
              <Text style={styles.btnRegisterText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a2a",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarContainerDesktop: {
    maxWidth: 1200,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 40,
  },
  desktopNav: {
    flexDirection: "row",
    gap: 32,
    flex: 1,
    justifyContent: "center",
  },
  desktopActions: {
    flexDirection: "row",
    gap: 12,
  },
  logo: {
    width: 50,
    height: 50,
  },
  menuButton: {
    padding: 8,
  },
  mobileMenu: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#2a2a2a",
  },
  navItem: {
    paddingVertical: 12,
  },
  navLink: {
    color: "#9ca3af",
    fontSize: 16,
    fontWeight: "500",
  },
  navLinkActive: {
    color: "#dc2626",
  },
  navActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  btnLogin: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#dc2626",
    borderRadius: 8,
    alignItems: "center",
  },
  btnLoginText: {
    color: "#dc2626",
    fontSize: 16,
    fontWeight: "600",
  },
  btnRegister: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#dc2626",
    borderRadius: 8,
    alignItems: "center",
  },
  btnRegisterText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
