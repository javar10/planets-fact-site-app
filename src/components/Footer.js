import { StyleSheet, Text, View } from 'react-native'
import FactCard from './FactCard'
import planetData from '../data.json';

const Footer = ({ selectedPlanet }) => {
  return (
    <View>
      <Text>Footer</Text>
      <FactCard
        heading={'rotation time'}
        data={selectedPlanet.rotation}
      />
       <FactCard
        heading={'revolution time'}
        data={selectedPlanet.revolution}
      />
       <FactCard
        heading={'radius'}
        data={selectedPlanet.radius}
      />
       <FactCard
        heading={'average temp'}
        data={selectedPlanet.temperature}
      />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})