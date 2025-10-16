import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", padding: 15 },
  image: {
    width: "100%",
    height: 320,
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#1E293B" },
  price: { fontSize: 18, color: "#10B981", marginVertical: 10 },
  desc: { fontSize: 15, color: "#6B7280", lineHeight: 22 },
});

export default ProductDetailsScreen;
