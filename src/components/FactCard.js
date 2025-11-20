import { StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme';

const FactCard = ({ screenSize, heading, data }) => {

  const styles = styleSheet(screenSize);

  return (
    <View style={[styles.container, styles[screenSize].container]}>
      <Text style={styles.headingText}>{heading}</Text>
      <Text style={styles.dataText}>{data}</Text>
    </View>
  )
}

export default FactCard

const styleSheet = (screenSize) => StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderColor: `${colors.white}33`,
    borderWidth: 1,
  },
  headingText: {
    ...textStyle[screenSize].H4,
    color: `${colors.white}80`,
  },
  dataText: {
    ...textStyle[screenSize].H2,
    color: colors.white,
  },
  laptop: {
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  },
  tablet: {
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingHorizontal: 14,
      marginHorizontal: 6,
      flex: 1,
    }
  },
  mobile: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
      marginBottom: 8,
    }
  }
})