import { StyleSheet, Text, View } from 'react-native'
import planetData from '../data.json';
import { colors, textStyle } from '../theme';
import IconChevron from '../../assets/svgs/IconChevron';

const PlanetsMenu = ({ screenSize, setSelectedPlanet, setIsMobileMenuOpen }) => {

    const selectPlanet = (planetName) => {
        const planet = planetData.find(p => p.name === planetName);
        setSelectedPlanet(planet);
        setIsMobileMenuOpen(false);
    };

    return (
        <View style={{
            paddingTop: screenSize === 'tablet' ? 40 : 32,
            flexDirection: screenSize !== 'mobile' ? 'row' : 'column',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: screenSize === 'tablet' ? 28 : 0,
        }}>
        {
            planetData.map((planet) => {
                const styles = styleSheet(screenSize, planet.name);
                return (
                    <View key={planet.name} style={[styles.container, styles[screenSize].container]} >
                        <View style={styles[screenSize].planetNameContainer}>
                            <View style={styles[screenSize].circle} />
                            <Text
                                style={styles.planetNameText}
                                onPress={() => selectPlanet(planet.name)}
                            >
                                {planet.name}
                            </Text>
                        </View>
                        {screenSize === 'mobile' && <IconChevron />}
                    </View>
                )
            })
        }

        </View >
    )
}

export default PlanetsMenu

const styleSheet = (screenSize, planetName) => StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomColor: `${colors.white}1A`,
    },
    planetNameText: {
        ...textStyle[screenSize].H3,
        color: colors.white,
    },
    laptop: {
        container: {
            flexDirection: 'column',
        },
        planetNameContainer: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    }, tablet: {
        container: {
            // flexDirection: 'column',
            // marginHorizontal: 52,
            flex: 1,
        },
        planetNameContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
        },
    }, mobile: {
        container: {
            flexDirection: 'row',
            marginHorizontal: 24,
        },
        planetNameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: planetName === 'Neptune' ? 0 : 1,
        },
        circle: {
            backgroundColor: colors[planetName],
            height: 20,
            width: 20,
            borderRadius: 100,
            marginRight: 20
        },
    }
})