// src/components/StyleText.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const StyleText = ({ title, onPress }) => (
  <Text style={styles.buttonText}>Devam Panchasara</Text>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#6200ee",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StyleText;
