import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme'
import Hamburger from '../../assets/icons/icon-hamburger.svg';

const Header = ({screenSize}) => {
  const styles = styleSheet(screenSize);
console.log(screenSize)
  return (
    <View style={styles.container}>
      <Text style={styles.heroText}>The Planets</Text>
      {screenSize === 'mobile' && 
      <Image source={Hamburger}/>
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