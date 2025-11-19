import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme'
import Hamburger from '../../assets/icons/icon-hamburger.png';
import PlanetsMenu from './PlanetsMenu';

const Header = ({ screenSize, setSelectedPlanet, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const styles = styleSheet(screenSize, isMobileMenuOpen);

  return (
    <View style={[styles.container, styles[screenSize].container]}>
      <Text style={styles.heroText}>The Planets</Text>
      {screenSize === 'mobile' &&
        <View>
          <Pressable onPress={() => setIsMobileMenuOpen(prev => !prev)}>
            <Image
              source={Hamburger}
              style={styles.image}
            />
          </Pressable>
        </View>
      }
      {screenSize !== 'mobile' &&
        <PlanetsMenu
          screenSize={screenSize}
          setSelectedPlanet={setSelectedPlanet}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      }
    </View>
  )
}

export default Header

const styleSheet = (screenSize, isMobileMenuOpen) => StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    // marginTop: 24,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomColor: `${colors.white}33`,
    borderBottomWidth: 1,
  },
  heroText: {
    ...textStyle[screenSize].hero,
    color: colors.white,
  },
  image: {
    width: 24,
    height: 17,
    opacity: isMobileMenuOpen ? .25 : 1
  },
  laptop: {
    container: {
      justifyContent: 'space-between',
      flexDirection: 'column',
    }
  },
  tablet: {
    container: {
      justifyContent: 'space-between',
      flexDirection: 'column',
    }
  },
  mobile: {
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
  }
})