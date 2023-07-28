import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RoundedButton } from "../components/RoundedButton";

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="25" onPress={() => onChangeTime(25)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="50" onPress={() => onChangeTime(50)} />
      </View>
    </>
  );
};

export default Timing;

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
