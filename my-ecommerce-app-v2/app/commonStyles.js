import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    padding: 10,
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#2a2a2a",
    marginBottom: 12,
    padding: 0,
  },
  image: {
    width: "100%",
    height: 180,
  },
  cardBody: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#dc2626",
    marginBottom: 12,
  },
  btnPrimary: {
    flex: 1,
    backgroundColor: "#dc2626",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  btnSecondary: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dc2626",
    alignItems: "center",
  },
  btnSecondaryText: {
    color: "#dc2626",
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    color: "#9ca3af",
    marginBottom: 16,
  },
})
