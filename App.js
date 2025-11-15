import { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, View, useWindowDimensions, Text, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/theme';
import planetData from './src/data.json';
import Header from './src/components/Header';
import PlanetImg from './src/components/PlanetImg';
import MainContent from './src/components/MainContent';
import Footer from './src/components/Footer';
import Stars from './assets/background/background-stars.svg';
import PlanetsMenu from './src/components/PlanetsMenu';
import MobilePageSelectors from './src/components/MobilePageSelectors';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  const [selectedPlanet, setSelectedPlanet] = useState(planetData.find(p => p.name === 'Earth'));
  const [page, setPage] = useState(selectedPlanet.overview)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const screenSize = width > 1040 ? 'laptop' : width > 740 ? 'tablet' : 'mobile';
  const styles = styleSheet(screenSize);

  Dimensions.addEventListener('change', () => setIsMobileMenuOpen(false));

  return (
    <View style={styles.container}>
      <ImageBackground source={Stars} style={styles.bgImage}>
        <StatusBar style="auto" />
        <Header
          screenSize={screenSize}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        {isMobileMenuOpen &&
          <View>
            <PlanetsMenu
              selectedPlanet={selectedPlanet}
              setSelectedPlanet={setSelectedPlanet}
            />
          </View>
        }
        {!isMobileMenuOpen &&
          <View>
            {screenSize === 'mobile' &&
              <MobilePageSelectors
                page={page}
                setPage={setPage}
                selectedPlanet={selectedPlanet}
              />}
            <View>
              <PlanetImg selectedPlanet={selectedPlanet}/>
              <MainContent 
              planetName={selectedPlanet.name} 
              page={page}
              />
            </View>
            <Footer />
          </View>
        }
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
