import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgPlanetMercury from '../../assets/svgs/PlanetMercury'
import SvgPlanetMercuryInternal from '../../assets/svgs/PlanetMercuryInternal'
import SvgPlanetVenus from '../../assets/svgs/PlanetVenus'

const SVG = () => {
  return (
    <View>
      <Text>SVG</Text>
      <SvgPlanetMercury /> 
      <SvgPlanetMercuryInternal />
      <SvgPlanetVenus />
    </View>
  )
}

export default SVG

const styles = StyleSheet.create({})