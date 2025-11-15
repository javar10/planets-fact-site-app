import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme';

const MainContent = ({ screenSize, selectedPlanet, page }) => {
  const styles = styleSheet(screenSize);

  return (
    <View style={styles.mainContentContainer}>
      <Text style={styles.headerText}>{selectedPlanet.name}</Text>
      <Text style={styles.bodyText}>{selectedPlanet[page].content}</Text>

      <View style={styles.sourceTextContainer}>
        <Text style={[styles.bodyText, styles.sourceText]}>
          Source:
        </Text>
        <View style={styles.sourceTextContainer}>
          <Text style={[styles.bodyText, styles.sourceText, styles.sourceLink]}
            onPress={() => Linking.openURL(selectedPlanet[page].source)}
          >Wikipedia
          </Text>
          <Image source={require('../../assets/icons/icon-source.svg')} />
        </View>
      </View>

    </View>
  )
}

export default MainContent

const styleSheet = (screenSize) => StyleSheet.create({
  mainContentContainer: {
    // height: 235,
    marginHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    ...textStyle[screenSize].H1,
    color: colors.white,
    marginBottom: 16,
  },
  bodyText: {
    ...textStyle[screenSize].body,
    color: colors.white,
    marginBottom: 16,
    textAlign: 'center',
  },
  sourceTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sourceText: {
    marginBottom: 0,
    marginRight: 3,
  },
  sourceLink: {
    textDecorationLine: 'underline',
  },
})