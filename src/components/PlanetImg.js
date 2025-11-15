import { Image, StyleSheet, Text, View } from 'react-native'

const PlanetImg = ({ screenSize, selectedPlanet, page }) => {
  const styles = styleSheet(screenSize);

  const imgages = {
    overview: {
      Mercury: require('../../assets/images/planet-mercury.svg'),
      Venus: require('../../assets/images/planet-venus.svg'),
      Earth: require('../../assets/images/planet-earth.svg'),
      Mars: require('../../assets/images/planet-mars.svg'),
      Jupiter: require('../../assets/images/planet-jupiter.svg'),
      Saturn: require('../../assets/images/planet-saturn.svg'),
      Uranus: require('../../assets/images/planet-uranus.svg'),
      Neptune: require('../../assets/images/planet-neptune.svg'),
    },
    structure: {
      Mercury: require('../../assets/images/planet-mercury-internal.svg'),
      Venus: require('../../assets/images/planet-venus-internal.svg'),
      Earth: require('../../assets/images/planet-earth-internal.svg'),
      Mars: require('../../assets/images/planet-mars-internal.svg'),
      Jupiter: require('../../assets/images/planet-jupiter-internal.svg'),
      Saturn: require('../../assets/images/planet-saturn-internal.svg'),
      Uranus: require('../../assets/images/planet-uranus-internal.svg'),
      Neptune: require('../../assets/images/planet-neptune-internal.svg'),
    },
    geology: {
      Mercury: require('../../assets/images/geology-mercury.png'),
      Venus: require('../../assets/images/geology-venus.png'),
      Earth: require('../../assets/images/geology-earth.png'),
      Mars: require('../../assets/images/geology-mars.png'),
      Jupiter: require('../../assets/images/geology-jupiter.png'),
      Saturn: require('../../assets/images/geology-saturn.png'),
      Uranus: require('../../assets/images/geology-uranus.png'),
      Neptune: require('../../assets/images/geology-neptune.png'),
    }
  }

  // const imageSizes = {
  //   Mercury: {width: }
  // }

  return (
    <View style={styles.planetImgContainer}>
      <Image
        style={styles.planetImg}
        source={imgages[page][selectedPlanet.name]}
      />
    </View>
  )
}

export default PlanetImg

const styleSheet = (screenSize) => StyleSheet.create({
  planetImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
    height: '68vw',
  },
  planetImg: {
    resizeMode: 'contain',
    transform: [{ scale: 0.385 }], 
  }
})