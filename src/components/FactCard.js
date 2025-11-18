import { StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme';

const FactCard = ({ screenSize, heading, data }) => {

  const styles = styleSheet(screenSize);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{heading}</Text>
      <Text style={styles.dataText}>{data}</Text>
    </View>
  )
}

export default FactCard

const styleSheet = (screenSize) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderColor: `${colors.white}33`,
    borderWidth: 1,
    marginBottom: 8,
  },
  headingText: {
    ...textStyle[screenSize].H4,
    color: `${colors.white}80`,
  },
  dataText: {
    ...textStyle[screenSize].H2,
    color: colors.white,
  }
})