import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme'
import Hamburger from '../../assets/icons/icon-hamburger.png';

const Header = ({ screenSize, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const styles = styleSheet(screenSize, isMobileMenuOpen);

  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default Header

const styleSheet = (screenSize, isMobileMenuOpen) => StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    // marginTop: 24,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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
   }
})