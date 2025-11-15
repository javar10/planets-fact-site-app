import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainContent = ({ planetName, page }) => {
  return (
    <View>
      <Text style={styles.headerText}>{planetName}</Text>
      <Text style={styles.bodyText}>{page.content}</Text>

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