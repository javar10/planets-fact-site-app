import { StyleSheet, Text, View } from 'react-native'
import planetData from '../data.json';
import { colors } from '../theme';

const Button = ({ selectedPlanet, pageDescriptor, setPage}) => {

  const setText = (planetName) => {
    setPage(selectedPlanet[pageDescriptor]);
    // const planet = planetData.find(p => p.name === planetName);
    console.log(selectedPlanet[pageDescriptor].content)
    console.log(planetName);
    // console.log(planetData.planetName.btnText.content);
  }

  return (
    <View>
      <Text
        style={styles.btnText}
        onPress={() => setText('Mercury')}
      >{pageDescriptor}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({

  btnText: {
    color: colors.white,
  }
})