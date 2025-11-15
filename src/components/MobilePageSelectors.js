import { StyleSheet, View } from 'react-native'
import { colors } from '../theme'
import Button from './Button';

const MobilePageSelectors = ({ screenSize, page, setPage, selectedPlanet }) => {
  // console.log(page);

  return (
    <View style={styles.container}>
      <Button
        screenSize={screenSize}
        pageDescriptor='overview'
        page={page}
        setPage={setPage}
        selectedPlanet={selectedPlanet}
      />
      <Button
        screenSize={screenSize}
        pageDescriptor='structure'
        page={page}
        setPage={setPage}
        selectedPlanet={selectedPlanet} />
      <Button
        screenSize={screenSize}
        pageDescriptor='geology'
        page={page}
        setPage={setPage}
        selectedPlanet={selectedPlanet} />
    </View>
  )
}

export default MobilePageSelectors

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    borderBottomColor: `${colors.white}33`,
    borderBottomWidth: 1,
  },

})