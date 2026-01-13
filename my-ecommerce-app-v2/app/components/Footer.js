import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Footer({ minimal = false }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  if (minimal) {
    return (
      <View style={[styles.minimalFooter, isDesktop && styles.minimalFooterDesktop]}>
        <View style={isDesktop && styles.containerDesktop}>
          <View style={styles.minimalRow}>
            <Text style={styles.minimalCompany}>Kenya Car Dealership</Text>
            <View style={styles.minimalContact}>
              <Text style={styles.minimalText}>Nairobi, Kenya</Text>
              <Text style={styles.minimalText}>+254 712 345 678</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.footer, isDesktop && styles.footerDesktop]}>
      <View style={isDesktop && styles.containerDesktop}>
        <View style={[styles.footerGrid, isDesktop && styles.footerGridDesktop]}>
          <View style={[styles.footerCol, isDesktop && styles.footerColDesktop]}>
            <Image
              source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/car-dealership-logo-shield-qD4sZ1FgcgbfiPbHZ4AcmQ9I0xHpPP.jpg" }}
              style={styles.footerLogo}
              resizeMode="contain"
            />
            <Text style={styles.footerText}>Find and buy the perfect car for you.</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.socialIcon}>
                <Ionicons name="logo-facebook" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Ionicons name="logo-instagram" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Ionicons name="logo-twitter" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.footerCol, isDesktop && styles.footerColDesktop]}>
            <Text style={styles.footerHeading}>Links</Text>
            <Link href="/" asChild>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Home</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/products" asChild>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Products</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/cart" asChild>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Cart</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/contact" asChild>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Contact</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={[styles.footerCol, isDesktop && styles.footerColDesktop]}>
            <Text style={styles.footerHeading}>Contact</Text>
            <Text style={styles.footerLink}>12 West Street, Nairobi</Text>
            <Text style={styles.footerLink}>+254 712 345 678</Text>
            <Text style={styles.footerLink}>support@cardealership.example</Text>
          </View>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.footerBottomText}>© 2025 Kenya Car Dealership. All rights reserved.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerDesktop: {
    paddingVertical: 60,
  },
  containerDesktop: {
    maxWidth: 1200,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 40,
  },
  footerGrid: {
    gap: 32,
  },
  footerGridDesktop: {
    flexDirection: "row",
    gap: 40,
  },
  footerCol: {
    gap: 12,
  },
  footerColDesktop: {
    flex: 1,
  },
  footerLogo: {
    width: 50,
    height: 50,
    marginBottom: 12,
  },
  footerText: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 22,
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: "row",
    gap: 12,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
  },
  footerHeading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  footerLink: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 8,
  },
  footerBottom: {
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "#2a2a2a",
    alignItems: "center",
  },
  footerBottomText: {
    fontSize: 14,
    color: "#9ca3af",
  },
  minimalFooter: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#2a2a2a",
  },
  minimalFooterDesktop: {
    paddingVertical: 20,
  },
  minimalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  minimalCompany: {
    color: "#fff",
    fontWeight: "700",
  },
  minimalContact: {
    alignItems: "flex-end",
  },
  minimalText: {
    color: "#9ca3af",
    fontSize: 13,
  },
});
