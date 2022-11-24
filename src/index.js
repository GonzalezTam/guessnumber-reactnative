import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Start, Game } from './screens';
import colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
  });

  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let mainContent = <Start onStartGame={onStartGame} />;
  if (userNumber) {
    mainContent = <Game userChoice={userNumber} />;
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
      <Header title={userNumber ? 'Time to play 😎' : 'Hi there! 👋🏻'} />
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
