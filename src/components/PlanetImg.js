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

  const imageKey = `${selectedPlanet.name}${page.charAt(0).toUpperCase() + page.slice(1)}`
  const PlanetImage = page === 'geology' ? planetImages[selectedPlanet.name]['overview'] : planetImages[selectedPlanet.name][page];

  return (
    <View style={styles.planetImgContainer}>
      {/* <MarsOverview style={styles.planetImg} /> */}
      <View style={styles.imageWrapper}>
        <PlanetImage style={styles.planetImg} />
      </View>
      {page === 'geology' &&
        <Image
          style={[styles.geologyImg]}
          source={geologyOverlays[selectedPlanet.name]}
        />
      }
    </View>);


  //     {/* <SvgPlanetMercuryInternal width={290} height={290} /> */ }
  // {/* <MercuryOverview  width={24} height ={24}/> */ }
  // {/* <Hamburger style={{ width: 24, height: 24 }} /> */ }
  // {/* <Image source={Hamburger} style={{ width: 50, height: 50 }} /> */ }
  // {/* <Image source={require('../../assets/images/planet-mercury.svg')} style={{ width: 50, height: 50 }} /> */ }

  // {/* <Image
  //       style={styles.planetImg}
  //       source={
  //         page === 'geology'
  //           ? images['overview'][selectedPlanet.name]
  //           : images[page][selectedPlanet.name]
  //         // : `${selectedPlanet.name}${page}`
  //       }
  //     />
  //     {page === 'geology' &&
  //       <Image
  //         style={[styles.planetImg, styles.geologyImg]}
  //         source={images['geology'][selectedPlanet.name]}
  //       />
  //     } */}

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
  imageWrapper: {
    transform: [{ scale: 0.385 }],
  },
  planetImg: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  geologyImg: {
    resizeMode: 'contain',
    transform: [{ scale: 0.22 }],
    position: 'absolute',
    top: 0,
  }
})