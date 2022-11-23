import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Start } from './screens';
import colors from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Hi There! 👋🏻" />
      <Start />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
