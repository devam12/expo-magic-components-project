import React from "react";
import { TextInput, StyleSheet } from "react-native";

const MyInput = () => {
  const [value, onChangeText] = React.useState("");

  return (
    <TextInput
      editable
      multiline
      numberOfLines={4}
      maxLength={40}
      placeholder="Please Enter Text"
      onChangeText={(text) => onChangeText(text)}
      value={value}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
    borderColor: "#5469",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: "#5469",
    marginBottom: 10,
  },
});

export default MyInput;
