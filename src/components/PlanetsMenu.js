import { StyleSheet, Text, View, Image } from 'react-native'
import planetData from '../data.json';
import { colors, textStyle } from '../theme';
import Arrow from '../../assets/icons/icon-chevron.svg';

const PlanetsMenu = ({ screenSize, setSelectedPlanet, setIsMobileMenuOpen }) => {

    const selectPlanet = (planetName) => {
        const planet = planetData.find(p => p.name === planetName);
        setSelectedPlanet(planet);
        setIsMobileMenuOpen(false);
    };

    return (
        <View style={{ paddingTop: 32 }}>
            {planetData.map((planet) => {
                const styles = styleSheet(screenSize, planet.name);
                return (
                    <View key={planet.name} style={styles.container} >
                        <View style={styles.planetNameContainer}>
                            <View style={styles.circle} />
                            <Text
                                style={styles.text}
                                onPress={() => selectPlanet(planet.name)}
                            >
                                {planet.name}
                            </Text>
                        </View>
                        <Image source={Arrow} />
                    </View>
                )
            })}

        </View>
    )
}

export default PlanetsMenu

const styleSheet = (screenSize, planetName) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 24,
        borderBottomColor: `${colors.white}1A`,
        borderBottomWidth: planetName === 'Neptune' ? 0 : 1,
    },
    planetNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: colors[planetName],
        height: 20,
        width: 20,
        borderRadius: 100,
        marginRight: 20
    },
    text: {
        ...textStyle[screenSize].H4,
        color: colors.white,
    }
})