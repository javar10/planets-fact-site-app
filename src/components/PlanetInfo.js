import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme';
import IconSource from '../../assets/svgs/IconSource';

const PlanetInfo = ({ screenSize, selectedPlanet, page }) => {
  const styles = styleSheet(screenSize);

  return (
    <View style={[styles.mainContentContainer, styles[screenSize].mainContentContainer]}>
      <Text style={[styles.headerText, styles[screenSize].headerText]}>{selectedPlanet.name}</Text>
      <Text style={[styles.bodyText, styles[screenSize].bodyText]}>{selectedPlanet[page].content}</Text>

      <View style={styles.sourceTextContainer}>
        <Text style={[styles.bodyText, styles.sourceText]}>
          Source:
        </Text>
        <View style={styles.sourceTextContainer}>
          <Text style={[styles.bodyText, styles.sourceText, styles.sourceLink]}
            onPress={() => Linking.openURL(selectedPlanet[page].source)}
          >Wikipedia
          </Text>
          <IconSource />
        </View>
      </View>

    </View>
  )
}

export default PlanetInfo

const styleSheet = (screenSize) => StyleSheet.create({
  mainContentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    ...textStyle[screenSize].H1,
    color: colors.white,
  },
  bodyText: {
    ...textStyle[screenSize].body,
    color: colors.white,
  },
  sourceTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  sourceText: {
    marginBottom: 0,
    marginRight: 3,
  },
  sourceLink: {
    textDecorationLine: 'underline',
  },
  laptop: {
    mainContentContainer: {
      alignItems: 'flex-start',
      width: '40%',
    }
  }, tablet: {
    mainContentContainer: {
      alignItems: 'flex-start',
      width: '50%',
      paddingLeft: 40,
    },
    headerText: {
      marginBottom: 24,
    },
    bodyText: {
      textAlign: 'flex-start',
      marginBottom: 24,
    },
  }, mobile: {
    mainContentContainer: {
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 24,
    },
    headerText: {
      marginBottom: 16,
    },
    bodyText: {
      textAlign: 'center',
      marginBottom: 16,
    },

  },
})