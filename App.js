import { useState } from 'react';
import { StyleSheet, View, useWindowDimensions, Dimensions, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/theme';
import planetData from './src/data.json';
import BackgroundStars from './assets/svgs/BackgroundStars';
import Header from './src/components/Header';
import PlanetImg from './src/components/PlanetImg';
import PlanetInfo from './src/components/PlanetInfo';
import Footer from './src/components/Footer';
import PlanetsMenu from './src/components/PlanetsMenu';
import PageSelectors from './src/components/PageSelectors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  const [selectedPlanet, setSelectedPlanet] = useState(planetData.find(p => p.name === 'Earth'));
  const [page, setPage] = useState('overview')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { width } = useWindowDimensions();
  const screenSize = width > 1040 ? 'laptop' : width > 740 ? 'tablet' : 'mobile';

  Dimensions.addEventListener('change', () => setIsMobileMenuOpen(false));

  console.log(screenSize);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='light' translucent={false} backgroundColor={colors.dark} />
        <ScrollView>
          <BackgroundStars style={styles.bgImage} />
          <Header
            screenSize={screenSize}
            setSelectedPlanet={setSelectedPlanet}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {isMobileMenuOpen &&
            <View>
              <PlanetsMenu
                screenSize={screenSize}
                setSelectedPlanet={setSelectedPlanet}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </View>
          }
          {!isMobileMenuOpen &&
            <View >
              {screenSize === 'mobile' &&
                <PageSelectors
                  screenSize={screenSize}
                  page={page}
                  setPage={setPage}
                  selectedPlanet={selectedPlanet}
                />}
              <View style={styles[screenSize].mainContentContainer}>
                <PlanetImg
                  screenSize={screenSize}
                  selectedPlanet={selectedPlanet}
                  page={page}
                />
                <View style={styles[screenSize].pageInfoContainer}>
                  <PlanetInfo
                    screenSize={screenSize}
                    selectedPlanet={selectedPlanet}
                    page={page}
                  />
                  {screenSize !== 'mobile' &&
                    <PageSelectors
                      screenSize={screenSize}
                      page={page}
                      setPage={setPage}
                      selectedPlanet={selectedPlanet}
                    />}
                </View>
              </View>
              <Footer
                screenSize={screenSize}
                selectedPlanet={selectedPlanet}
              />
            </View>
          }
        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  bgImage: {
    position: 'absolute',
  },
  laptop: {
    mainContentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    pageInfoContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flex: 1,
    },
  },
  tablet: {
    mainContentContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    pageInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  mobile: {
    mainContentContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

});
