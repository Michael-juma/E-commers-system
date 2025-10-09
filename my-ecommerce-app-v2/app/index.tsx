"use client"

import { useState } from "react"
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const { width } = Dimensions.get("window")

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const formatKES = (amount: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const featuredCars = [
    {
      id: 1,
      name: "MCLAREN 750S",
      category: "Supercars",
      price: 85000000,
      image: {
        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/red-mclaren-750s-sports-car-WXWgQTUgK9Zr1nQkPKycirr2k5o8qa.jpg",
      },
    },
    {
      id: 2,
      name: "MCLAREN 750S",
      category: "Supercars",
      price: 85000000,
      image: {
        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/red-mclaren-sports-car-side-view-4xDYIETE4pCUZDHiduHaZSejo2zeue.jpg",
      },
    },
    {
      id: 3,
      name: "MCLAREN 750S",
      category: "Supercars",
      price: 82000000,
      image: {
        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/yellow-mclaren-750s-sports-car-T6tGK4MyPm1IK4fHcSc9qLkk6ZeTcL.jpg",
      },
    },
    {
      id: 4,
      name: "MCLAREN 750S",
      category: "Supercars",
      price: 83000000,
      image: {
        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/silver-mclaren-750s-sports-car-jmhcrezlkhtT42sfdDYeQTtPrA5KDQ.jpg",
      },
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Julian Comesa",
      role: "CEO",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      name: "Julian Comesa",
      role: "CEO",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      name: "Julian Comesa",
      role: "CEO",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Navigation */}
      <View style={styles.navbar}>
        <View style={styles.navbarContainer}>
          <Image
            source={{
              uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/car-dealership-logo-shield-qD4sZ1FgcgbfiPbHZ4AcmQ9I0xHpPP.jpg",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.menuButton} onPress={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        {mobileMenuOpen && (
          <View style={styles.mobileMenu}>
            <TouchableOpacity style={styles.navItem}>
              <Text style={[styles.navLink, styles.navLinkActive]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navLink}>Compare Cars</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navLink}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navLink}>Contact Us</Text>
            </TouchableOpacity>
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

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>
            FIND THE <Text style={styles.textRed}>PERFECT</Text>
            {"\n"}CAR FOR YOU
          </Text>
          <Text style={styles.heroText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since.
          </Text>
          <TouchableOpacity style={styles.btnExplore}>
            <Text style={styles.btnExploreText}>Explore</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <View style={styles.servicesLeft}>
          <Text style={styles.sectionTitle}>The services offered</Text>
          <Text style={styles.textMuted}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Text>

          <View style={styles.statsGrid}>
            <View style={styles.statsBox}>
              <Text style={styles.statsNumber}>250K+</Text>
              <Text style={styles.statsLabel}>Active Users</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsNumber}>250K+</Text>
              <Text style={styles.statsLabel}>Active Users</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsNumber}>250K+</Text>
              <Text style={styles.statsLabel}>Active Users</Text>
            </View>
          </View>
        </View>

        <View style={styles.servicesRight}>
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Buy a Car</Text>
            <Text style={styles.serviceText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#dc2626" />
          </View>
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Sell a Car</Text>
            <Text style={styles.serviceText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#dc2626" />
          </View>
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Trade In</Text>
            <Text style={styles.serviceText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#dc2626" />
          </View>
        </View>
      </View>

      {/* Innovation Section */}
      <View style={styles.innovationSection}>
        <Text style={styles.innovationTitle}>
          WHERE INNOVATION MEETS <Text style={styles.textRed}>THE ROAD</Text>
        </Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <Ionicons name="settings-outline" size={40} color="#dc2626" />
            <Text style={styles.featureTitle}>Custom Exhaust System</Text>
            <Text style={styles.featureText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
          <View style={styles.featureCard}>
            <Ionicons name="flash-outline" size={40} color="#dc2626" />
            <Text style={styles.featureTitle}>Custom Exhaust System</Text>
            <Text style={styles.featureText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
          <View style={styles.featureCard}>
            <Ionicons name="speedometer-outline" size={40} color="#dc2626" />
            <Text style={styles.featureTitle}>Innovating Every Mile</Text>
            <Text style={styles.featureText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
        </View>
      </View>

      {/* Featured Cars Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitleCenter}>Featured Cars</Text>
        <View style={styles.carsGrid}>
          {featuredCars.map((car) => (
            <View key={car.id} style={styles.carCard}>
              <Image source={car.image} style={styles.carImage} resizeMode="cover" />
              <View style={styles.carCardBody}>
                <Text style={styles.carName}>{car.name}</Text>
                <Text style={styles.carCategory}>{car.category}</Text>
                <Text style={styles.carPrice}>{formatKES(car.price)}</Text>
                <View style={styles.carCardActions}>
                  <TouchableOpacity style={styles.btnBook}>
                    <Text style={styles.btnBookText}>Book Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnDetails}>
                    <Text style={styles.btnDetailsText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Pagination */}
        <View style={styles.pagination}>
          <TouchableOpacity style={styles.pageButton}>
            <Text style={styles.pageButtonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pageButton, styles.pageButtonActive]}>
            <Text style={styles.pageButtonTextActive}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Text style={styles.pageButtonText}>3</Text>
          </TouchableOpacity>
          <Text style={styles.pageDots}>......</Text>
        </View>
      </View>

      {/* Testimonials Section */}
      <View style={styles.testimonialsSection}>
        <Text style={styles.sectionTitleCenter}>What Our Clients Say About Us</Text>
        <View style={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <View key={testimonial.id} style={styles.testimonialCard}>
              <View style={styles.testimonialHeader}>
                <View style={styles.testimonialAvatar} />
                <View style={styles.testimonialInfo}>
                  <Text style={styles.testimonialName}>{testimonial.name}</Text>
                  <Text style={styles.testimonialRole}>{testimonial.role}</Text>
                </View>
              </View>
              <Text style={styles.testimonialText}>{testimonial.text}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerGrid}>
          <View style={styles.footerCol}>
            <Image
              source={{
                uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/car-dealership-logo-shield-qD4sZ1FgcgbfiPbHZ4AcmQ9I0xHpPP.jpg",
              }}
              style={styles.footerLogo}
              resizeMode="contain"
            />
            <Text style={styles.footerText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
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
              <TouchableOpacity style={styles.socialIcon}>
                <Ionicons name="logo-linkedin" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerCol}>
            <Text style={styles.footerHeading}>Support</Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Faq</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Shipping & Returns</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Our Partners</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerCol}>
            <Text style={styles.footerHeading}>Info</Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Our Stores</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Size Guide</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Our Painting Services</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerCol}>
            <Text style={styles.footerHeading}>Contact</Text>
            <Text style={styles.footerLink}>12 West Street, Kari Road</Text>
            <Text style={styles.footerLink}>Nairobi, Kenya</Text>
            <Text style={styles.footerLink}>+254 712 345 678</Text>
            <Text style={styles.footerLink}>+254 734 567 890</Text>
          </View>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.footerBottomText}>© 2025 Kenya Car Dealership. All rights reserved.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
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
  heroSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#1a1a1a",
  },
  heroContent: {
    maxWidth: 600,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 20,
    lineHeight: 50,
  },
  textRed: {
    color: "#dc2626",
  },
  heroText: {
    fontSize: 16,
    color: "#9ca3af",
    marginBottom: 30,
    lineHeight: 24,
  },
  btnExplore: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dc2626",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: "flex-start",
    gap: 8,
  },
  btnExploreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  servicesSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  servicesLeft: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 16,
  },
  textMuted: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 22,
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  statsBox: {
    flex: 1,
    minWidth: 100,
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  statsNumber: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  statsLabel: {
    fontSize: 14,
    color: "#9ca3af",
  },
  servicesRight: {
    gap: 16,
  },
  serviceCard: {
    backgroundColor: "#1a1a1a",
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 12,
  },
  serviceText: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 22,
  },
  innovationSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#1a1a1a",
  },
  innovationTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  featuresGrid: {
    gap: 20,
  },
  featureCard: {
    backgroundColor: "#0a0a0a",
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a2a2a",
    alignItems: "center",
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginTop: 16,
    marginBottom: 12,
    textAlign: "center",
  },
  featureText: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 22,
    textAlign: "center",
  },
  featuredSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  sectionTitleCenter: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  carsGrid: {
    gap: 20,
  },
  carCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  carImage: {
    width: "100%",
    height: 200,
  },
  carCardBody: {
    padding: 20,
  },
  carName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  carCategory: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 12,
  },
  carPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#dc2626",
    marginBottom: 16,
  },
  carCardActions: {
    flexDirection: "row",
    gap: 12,
  },
  btnBook: {
    flex: 1,
    backgroundColor: "#dc2626",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnBookText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  btnDetails: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dc2626",
    alignItems: "center",
  },
  btnDetailsText: {
    color: "#dc2626",
    fontSize: 14,
    fontWeight: "600",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    gap: 12,
  },
  pageButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  pageButtonActive: {
    backgroundColor: "#dc2626",
    borderColor: "#dc2626",
  },
  pageButtonText: {
    color: "#9ca3af",
    fontSize: 16,
    fontWeight: "600",
  },
  pageButtonTextActive: {
    color: "#fff",
  },
  pageDots: {
    color: "#9ca3af",
    fontSize: 16,
  },
  testimonialsSection: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#1a1a1a",
  },
  testimonialsGrid: {
    gap: 20,
  },
  testimonialCard: {
    backgroundColor: "#0a0a0a",
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  testimonialHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  testimonialAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2a2a2a",
    marginRight: 12,
  },
  testimonialInfo: {
    flex: 1,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  testimonialRole: {
    fontSize: 14,
    color: "#9ca3af",
  },
  testimonialText: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 22,
  },
  footer: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerGrid: {
    gap: 32,
  },
  footerCol: {
    gap: 12,
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
})
