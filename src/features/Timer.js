import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { colors } from "../utils/color";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spaceing } from "../utils/sizes";

const Timer = ({ focusSub, onTimerEnd, clearSub }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {}}
        />
        <View style={{ paddingTop: spaceing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSub}</Text>
        </View>
      </View>
      {/* <View style={{ paddingTop: spaceing.sm }}></View> */}
      <View style={{ paddingTop: spaceing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.prograssBar}
          style={{ height: spaceing.sm }}
        />
      </View>
      <View style={styles.btnWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
