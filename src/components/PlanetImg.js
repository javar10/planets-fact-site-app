import { Image, StyleSheet, View } from 'react-native'
import MercuryOverview from '../../assets/svgs/PlanetMercury'
import MercuryStructure from '../../assets/svgs/PlanetMercuryInternal'
import VenusOverview from '../../assets/svgs/PlanetVenus'
import VenusStructure from '../../assets/svgs/PlanetVenusInternal'
import EarthOverview from '../../assets/svgs/PlanetEarth'
import EarthStructure from '../../assets/svgs/PlanetEarthInternal'
import MarsOverview from '../../assets/svgs/PlanetMars'
import MarsStructure from '../../assets/svgs/PlanetMarsInternal'
import JupiterOverview from '../../assets/svgs/PlanetJupiter'
import JupiterStructure from '../../assets/svgs/PlanetJupiterInternal'
import SaturnOverview from '../../assets/svgs/PlanetSaturn'
import SaturnStructure from '../../assets/svgs/PlanetSaturnInternal'
import UranusOverview from '../../assets/svgs/PlanetUranus'
import UranusStructure from '../../assets/svgs/PlanetUranusInternal'
import NeptuneOverview from '../../assets/svgs/PlanetNeptune'
import NeptuneStructure from '../../assets/svgs/PlanetNeptuneInternal'

const PlanetImg = ({ screenSize, selectedPlanet, page }) => {
  const styles = styleSheet(screenSize);
  const geologyOverlays = {
    Mercury: require('../../assets/images/geology-mercury.png'),
    Venus: require('../../assets/images/geology-venus.png'),
    Earth: require('../../assets/images/geology-earth.png'),
    Mars: require('../../assets/images/geology-mars.png'),
    Jupiter: require('../../assets/images/geology-jupiter.png'),
    Saturn: require('../../assets/images/geology-saturn.png'),
    Uranus: require('../../assets/images/geology-uranus.png'),
    Neptune: require('../../assets/images/geology-neptune.png'),
  }

  const planetImages = {
    Mercury: {
      overview: MercuryOverview,
      structure: MercuryStructure,
      geology: geologyOverlays['Mercury'],
    },
    Venus: {
      overview: VenusOverview,
      structure: VenusStructure,
      geology: geologyOverlays['Venus'],
    },
    Earth: {
      overview: EarthOverview,
      structure: EarthStructure,
      geology: geologyOverlays['Earth'],
    },
    Mars: {
      overview: MarsOverview,
      structure: MarsStructure,
      geology: geologyOverlays['Mars'],
    },
    Jupiter: {
      overview: JupiterOverview,
      structure: JupiterStructure,
      geology: geologyOverlays['Jupiter'],
    },
    Saturn: {
      overview: SaturnOverview,
      structure: SaturnStructure,
      geology: geologyOverlays['Saturn'],
    },
    Uranus: {
      overview: UranusOverview,
      structure: UranusStructure,
      geology: geologyOverlays['Uranus'],
    },
    Neptune: {
      overview: NeptuneOverview,
      structure: NeptuneStructure,
      geology: geologyOverlays['Neptune'],
    },
  }

  console.log('planet:', selectedPlanet.name);
  console.log('overlay:', geologyOverlays[selectedPlanet.name]);

  const PlanetImage = page === 'geology' ? planetImages[selectedPlanet.name]['overview'] : planetImages[selectedPlanet.name][page];

  return (
    <View style={[styles.planetImgContainer, styles[screenSize].planetImgContainer]}>
      <View style={styles[screenSize].imageWrapper}>
        <PlanetImage style={styles.planetImg} />
      </View>
      {page === 'geology' &&
        <Image
          style={[styles.geologyImg, styles[screenSize].geologyImg]}
          source={geologyOverlays[selectedPlanet.name]}
        />
      }
    </View>);
}

export default PlanetImg

const styleSheet = (screenSize) => StyleSheet.create({
  planetImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
    position: 'relative',
  },

  planetImg: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  geologyImg: {
    resizeMode: 'contain',
    position: 'absolute',
    
  },
  laptop: {
    planetImgContainer: {
      height: 666,
    }
  },
  tablet: {
     planetImgContainer: {
      height: 422,
    },
    imageWrapper: {
      transform: [{ scale: 0.634 }],
    },
    geologyImg: {
      transform: [{ scale: 0.33 }],
      top: 125,
    }
  },
  mobile: {
    planetImgContainer: {
      height: 256,
    },
    imageWrapper: {
      transform: [{ scale: 0.385 }],
    },
    geologyImg: {
      transform: [{ scale: 0.22 }],
      top: 0,
    }
  }
})