import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import PlanetImg from './src/components/PlanetImg';
import MainContent from './src/components/MainContent';
import Footer from './src/components/Footer';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <PlanetImg />
      <MainContent />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
