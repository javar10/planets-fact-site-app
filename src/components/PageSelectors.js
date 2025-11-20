import { StyleSheet, View } from 'react-native'
import { colors } from '../theme'
import PageSelector from './PageSelector';

const PageSelectors = ({ screenSize, page, setPage, selectedPlanet }) => {

  return (
    <View style={[styles.container, styles[screenSize].container]}>
      <PageSelector
        screenSize={screenSize}
        selectorNumber='01'
        pageDescriptor='overview'
        page={page}
        setPage={setPage}
        selectedPlanet={selectedPlanet}
      />
      <PageSelector
        screenSize={screenSize}
        selectorNumber='02'
        pageDescriptor='structure'
        page={page}
        setPage={setPage}
        selectedPlanet={selectedPlanet} />
      <PageSelector
        screenSize={screenSize}
        selectorNumber='03'
        pageDescriptor='geology'
        page={page}
        setPage={setPage}
        selectedPlanet={selectedPlanet} />
    </View>
  )
}

export default PageSelectors

const styles = StyleSheet.create({
  container: {
    // borderWidth: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  laptop: {
    // container: {
    //   flexDirection: 'column',
    // },
  },
  tablet: {
    container: {
      //   flexDirection: 'column',
      paddingHorizontal: 40,
      width: '50%',
      //   alignItems: 'flex-start',
    },
  },
  mobile: {
    container: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      width: '100%',
      alignItems: 'center',
      borderBottomColor: `${colors.white}33`,
      borderBottomWidth: 1,
      paddingTop: 16,
    },
  },
})