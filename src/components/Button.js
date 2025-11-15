import { StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../theme';

const Button = ({ screenSize, selectedPlanet, pageDescriptor, page, setPage}) => {
  const styles = styleSheet(screenSize, selectedPlanet);

  return (
    <View>
      <Text
        style={[
          styles.btnText, 
          pageDescriptor === page && styles.selectedText
        ]}
        onPress={() => setPage(pageDescriptor)}
      >{pageDescriptor}</Text>
    </View>
  )
}

export default Button

const styleSheet = (screenSize, selectedPlanet) => StyleSheet.create({
  btnText: {
    ...textStyle.H5m,
    color: colors.white,
    borderBottomWidth: 4,
    paddingBottom: 12,
  },
  selectedText: {
    borderBottomColor: colors[selectedPlanet.name],
    
  }
})