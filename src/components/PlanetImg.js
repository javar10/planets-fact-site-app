import { Image, StyleSheet, View } from 'react-native'
import MercuryOverview from '../../assets/images/planet-mercury.svg'
import VenusOverMercuryOverview from '../../assets/images/planet-venus.svg'
import EarthOverMercuryOverview from '../../assets/images/planet-earth.svg'
import MarsOverMercuryOverview from '../../assets/images/planet-mars.svg'
import JupiterOverMercuryOverview from '../../assets/images/planet-jupiter.svg'
import SaturnOverMercuryOverview from '../../assets/images/planet-saturn.svg'
import UranusOverMercuryOverview from '../../assets/images/planet-uranus.svg'
import NeptuneOverMercuryOverview from '../../assets/images/planet-neptune.svg'

const PlanetImg = ({ screenSize, selectedPlanet, page }) => {
  const styles = styleSheet(screenSize);

  const images = {
    overview: {
      Mercury: MercuryOverview,
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
        source={
          page === 'geology'
            ? images['overview'][selectedPlanet.name]
            : images[page][selectedPlanet.name]
            // : `${selectedPlanet.name}${page}`
        }
      />
      {page === 'geology' &&
        <Image
          style={[styles.planetImg, styles.geologyImg]}
          source={images['geology'][selectedPlanet.name]}
        />
      }
    </View>
  )
}

export default PlanetImg

const styleSheet = (screenSize) => StyleSheet.create({
  planetImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
    height: 256,
    position: 'relative',
  },
  planetImg: {
    resizeMode: 'contain',
    transform: [{ scale: 0.385 }],
  },
  geologyImg: {
    resizeMode: 'contain',
    transform: [{ scale: 0.22 }],
    position: 'absolute', 
    top: 0,
  }
})