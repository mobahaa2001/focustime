import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { colors } from "../utils/color";
import { RoundedButton } from "../components/RoundedButton";
import { spaceing } from "../utils/sizes";
const Focus = ({ addSub }) => {
  const [sub, setSub] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSub}
          label="What would you like to focus on?"
        />
        <RoundedButton title="+" size={50} onPress={() => addSub(sub)} />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spaceing.lg,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spaceing.sm,
  },
});
