import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { colors } from "../utils/color";
import { fontSizes, spaceing } from "../utils/sizes";

const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>We haven't focused on anythingyet</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things We've focused on :</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spaceing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spaceing.sm,
  },
});
