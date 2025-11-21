import { StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme';

const PageSelector = ({ screenSize, selectorNumber, pageDescriptor, page, setPage, selectedPlanet }) => {
  const styles = styleSheet(screenSize, selectedPlanet);

  return (
    <View style={[
      styles[screenSize].container,
      pageDescriptor === page && styles[screenSize].selectedContainer]}>
      {screenSize !== 'mobile' &&
        <Text
          style={[
            styles.btnText,
            styles[screenSize].btnText,
            styles.pageNumber
          ]}
          onPress={() => setPage(pageDescriptor)}
        >
          {selectorNumber}
        </Text>
      }

      <Text
        style={[
          styles.btnText,
          styles[screenSize].btnText,
          pageDescriptor === page && styles[screenSize].selectedText
        ]}
        onPress={() => setPage(pageDescriptor)}
      >  {screenSize !== 'mobile'
        ? pageDescriptor === 'structure'
          ? 'internal structure'
          : pageDescriptor === 'geology'
            ? 'surface geology'
            : pageDescriptor
        : pageDescriptor === 'geology'
          ? 'surface'
          : pageDescriptor}
      </Text>
    </View>
  )
}

export default PageSelector

const styleSheet = (screenSize, selectedPlanet) => StyleSheet.create({
  btnText: {
    ...textStyle[screenSize].H4,
  },
  pageNumber: {
    opacity: 0.5,
  },
  laptop: {
    container: {
      width: '100%',
      borderColor: `${colors.white}33`,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    selectedContainer: {
      backgroundColor: colors[selectedPlanet.name],
      borderWidth: 0,
    },
    btnText: {
      color: colors.white,
      paddingVertical: 12,
      paddingLeft: 20,
    },
    selectedText: {
      backgroundColor: colors[selectedPlanet.name],
    },
  },
  tablet: {
    container: {
      width: '100%',
      borderColor: `${colors.white}33`,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    selectedContainer: {
      backgroundColor: colors[selectedPlanet.name],
      borderWidth: 0,
    },
    btnText: {
      color: colors.white,
      paddingVertical: 8,
      paddingLeft: 20,
    },
    // selectedText: {
    //   backgroundColor: colors[selectedPlanet.name],
    // },
  },
  mobile: {
    btnText: {
      color: `${colors.white}80`,
      paddingBottom: 12,
    },
    selectedText: {
      borderBottomColor: colors[selectedPlanet.name],
      color: colors.white,
      borderBottomWidth: 4,
    },
  }
})