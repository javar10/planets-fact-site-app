import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainContent = ({ selectedPlanet, page }) => {
  return (
    <View>
      <Text style={styles.headerText}>{selectedPlanet.name}</Text>
      <Text style={styles.bodyText}>{selectedPlanet[page].content}</Text>

      <Text style={styles.sourceText} >Source:
        <Text style={styles.sourceLink}
          onPress={() => Linking.openURL(page.source)}
        > {`Wikipedia `}
          <Image source={require('../../assets/icons/icon-source.svg')} />
        </Text>
      </Text>
      
    </View>
  )
}

export default MainContent

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
  },
  bodyText: {
    color: 'white',
  },
  sourceText: {
    color: 'white',
  }
})