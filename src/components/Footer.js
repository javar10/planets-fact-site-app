import { StyleSheet, Text, View } from 'react-native'
import FactCard from './FactCard'

const Footer = ({ screenSize, selectedPlanet }) => {
  const styles = styleSheet(screenSize);

  return (
    <View style={styles.container}>
      <FactCard
        screenSize={screenSize}
        heading={'rotation time'}
        data={selectedPlanet.rotation}
      />
      <FactCard
        screenSize={screenSize}
        heading={'revolution time'}
        data={selectedPlanet.revolution}
      />
      <FactCard
        screenSize={screenSize}
        heading={'radius'}
        data={selectedPlanet.radius}
      />
      <FactCard
        screenSize={screenSize}
        heading={'average temp'}
        data={selectedPlanet.temperature}
      />
    </View>
  )
}

export default Footer

const styleSheet = (screenSize) => StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 24,
    marginVertical: 16
  }
})