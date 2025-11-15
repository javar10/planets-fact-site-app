import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FactCard = ({heading, data}) => {
  return (
    <View>
      <Text style={styles.headingText}>{heading}</Text>
      <Text style={styles.dataText}>{data}</Text>
    </View>
  )
}

export default FactCard

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
  },
  dataText: {
    color: 'white', 
  }
})