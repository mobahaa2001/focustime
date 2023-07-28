import { StyleSheet, Text, View, Vibration } from "react-native";
import React, { useState } from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { colors } from "../utils/color";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spaceing } from "../utils/sizes";
import Timing from "./Timing";
const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
  5 * ONE_SECOND_IN_MS,
];
const Timer = ({ focusSub, onTimerEnd, clearSub }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(25);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
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
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.btnWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSub} />
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
    padding: spaceing.md,
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
  timingWrapper: {
    flex: 0.1,
    paddingTop: spaceing.xxl,
    flexDirection: "row",
  },
  clearSubWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
