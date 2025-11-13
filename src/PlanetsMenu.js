import { StyleSheet, Text, View, Image } from 'react-native'
import planetData from '../src/data.json';
import { colors } from './theme';
import Arrow from '../assets/icons/icon-chevron.svg';

const PlanetsMenu = () => {
    return (
        <View style={{ paddingTop: 32 }}>
            {planetData.map((planet) => {
                const styles = styleSheet(planet.name);
                console.log(planet.name)
                return (
                    <View key={planet.name} style={styles.container} >
                        <View style={styles.planetNameContainer}>
                            <View style={styles.circle} />
                            <Text style={styles.text}>{planet.name}</Text>
                        </View>
                        <Image source={Arrow}/>
                    </View>
                )
            })}

        </View>
    )
}

export default PlanetsMenu

const styleSheet = (planetName) => StyleSheet.create({
    container: {
        // flex: 1,
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
        fontFamily: 'Spartan-Bold',
        fontSize: 15,
        lineHeight: 25,
        letterSpacing: 1.36,
        textTransform: 'uppercase',
        color: colors.white,
    }
})