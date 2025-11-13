import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme'
import Hamburger from '../../assets/icons/icon-hamburger.svg';

const Header = ({ screenSize, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const styles = styleSheet(screenSize);

  return (
    <View style={styles.container}>
      <Text style={styles.heroText}>The Planets</Text>
      {screenSize === 'mobile' &&
        <Pressable onPress={() => setIsMobileMenuOpen(prev => !prev)}>
          <Image
            source={Hamburger}
            style={{opacity: isMobileMenuOpen ? .25 : 1}}
          />
        </Pressable>

      }
    </View>
  )
}

export default Header

const styleSheet = (screenSize) => StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: `${colors.white}33`,
    borderBottomWidth: 1,
  },
  heroText: {
    fontFamily: 'Antonio-Medium',
    fontSize: 28,
    lineHeight: 28,
    letterSpacing: -1.05,
    textTransform: 'uppercase',
    color: colors.white,
  }
})