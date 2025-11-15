import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button';

const MobilePageSelectors = ({page, setPage, selectedPlanet}) => {
  // console.log(page);

  return (
    <View>
      <Button 
      pageDescriptor='overview' 
      setPage={setPage} 
      selectedPlanet={selectedPlanet}
      />
      <Button pageDescriptor='structure' setPage={setPage} selectedPlanet={selectedPlanet}/>
      <Button pageDescriptor='geology' setPage={setPage} selectedPlanet={selectedPlanet}/>
    </View>
  )
}

export default MobilePageSelectors

const styles = StyleSheet.create({})