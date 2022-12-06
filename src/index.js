import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Start, Game, Over } from './screens';
import colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
  });

  const [userNumber, setUserNumber] = useState(null);
  const [rounds, setRounds] = useState(0);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onGameOver = (rounds) => {
    setRounds(rounds);
  };

  const onRestart = () => {
    setUserNumber(null);
    setRounds(0);
  };

  let mainContent = <Start onStartGame={onStartGame} />;

  const getTitle = () => {
    let title;
    if (userNumber && rounds <= 0) {
      title = 'Time to play 😎';
    } else if (rounds > 0) {
      title = 'Game over 💩';
    } else {
      title = 'Hi there! 👋🏻';
    }
    return title;
  };

  if (userNumber && rounds <= 0) {
    mainContent = <Game selectedNumber={userNumber} onGameOver={onGameOver} />;
  } else if (rounds > 0) {
    mainContent = <Over rounds={rounds} selectedNumber={userNumber} onRestart={onRestart} />;
  }

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={getTitle()} />
      {mainContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loader: {
    flex: 1,
  },
});
