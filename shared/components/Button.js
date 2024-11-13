// src/components/MyButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default MyButton;
