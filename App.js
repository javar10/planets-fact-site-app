import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import PlanetImg from './src/components/PlanetImg';
import MainContent from './src/components/MainContent';
import Footer from './src/components/Footer';
import { colors } from './src/theme';
import Stars from './assets/background/background-stars.svg';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  const { width } = useWindowDimensions();
  const screenSize = width > 1040 ? 'laptop' : width > 740 ? 'tablet' : 'mobile';
  const styles = styleSheet(screenSize);

  return (
    <View style={styles.container}>
      <ImageBackground source={Stars} style={styles.bgImage}>
      <StatusBar style="auto" />
      <Header screenSize={screenSize}/>
      <View>
        <PlanetImg />
        <MainContent />
      </View>
      <Footer />
      </ImageBackground >
     
    </View>
  );
}

const styleSheet = (screenSize) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bgImage: {
    flex: 1,
resizeMode: 'cover'
  }
  
});
