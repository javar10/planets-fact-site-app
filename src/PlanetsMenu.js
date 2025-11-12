import { StyleSheet, Text, View } from 'react-native'
import planetData from '../src/data.json';
import { colors } from './theme';

const PlanetsMenu = () => {
    return (
        <View>
            {planetData.map((planet) => {
                const styles = styleSheet(planet.name);
                console.log(planet.name)
                return (
                    <View key={planet.name}>
                        <View>
                            <View style={styles.circle}/>
                            <Text style={{ color: 'white' }}>{planet.name}</Text>
                        </View>


                    </View>

                )

            })}

        </View>
    )
}

export default PlanetsMenu

const styleSheet = (planetName) => StyleSheet.create({
    circle: {
        backgroundColor: colors[planetName],
        height: 20,
        width: 20,
        borderRadius: 100,

    }
})