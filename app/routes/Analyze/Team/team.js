import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import Bar from '../../../components/Bar';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginHorizontal: 20,
        marginVertical: 5,

        paddingVertical: 5,
    },
    section: {
        backgroundColor: '#5E8FDC',

        borderRadius: 5,
        flex: 1,

        shadowColor: '#000000',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 0,
        },

        padding: 10,
        marginVertical: 10,
    },
    chartContainer: {
    }
});

export default class AnalyzeTeam extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sword = (
            <MaterialIcon
                name="sword"
                size={35}
                color="#ebf7f9"
                style={{backgroundColor: "transparent"}}
                borderRadius={0}
            />
       );

        const trophy = (
            <MaterialIcon
                name="trophy"
                size={33}
                color="#ebf7f9"
                style={{backgroundColor: "transparent"}}
                borderRadius={0}
            />
        );

        const point = (
            <MaterialIcon
                name="checkbox-blank-circle"
                size={31}
                color="#ebf7f9"
                style={{backgroundColor: "transparent"}}
                borderRadius={0}
            />
        );

        const gear = (
            <FontAwesomeIcon
                name="gear"
                size={31}
                color="#ebf7f9"
                style={{backgroundColor: "transparent"}}
                borderRadius={0}
            />
        );

        const hopper = (
            <EntypoIcon
                name="shopping-bag"
                size={30}
                color="#ebf7f9"
                style={{backgroundColor: "transparent"}}
                borderRadius={0}
            />
        );

        const exclamation = (
            <FontAwesomeIcon
                name="exclamation"
                size={30}
                color="#ebf7f9"
                style={{backgroundColor: "transparent"}}
                borderRadius={0}
            />
        );

        return (
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Bar
                        color="#F55443"
                        hint="Offensive Power Rating"
                        icon={sword}
                        amount={100}
                        full={100}
                    />
                    <Bar
                        color="#FCBD24"
                        hint="Calculated Contrib. to Winning Margin"
                        icon={trophy}
                        amount={50}
                        full={100}
                    />
                    <Bar
                        color="#59838B"
                        hint="Average Points"
                        icon={point}
                        amount={80}
                        full={300}
                    />
                    <Bar
                        color="#4D98E4"
                        hint="Average Gears"
                        icon={gear}
                        amount={3}
                        full={8}
                    />
                    <Bar
                        color="#418E50"
                        hint="Average Hoppers Activated"
                        icon={hopper}
                        amount={2}
                        full={4}
                    />
                    <Bar
                        color="#7B7FEC"
                        hint="Average Fouls"
                        icon={exclamation}
                        amount={1}
                        full={4}
                    />
                </View>
                <View style={[styles.section, styles.chartContainer]}>

                </View>
                <View style={styles.section}>

                </View>
            </ScrollView>
        );
    }
};
