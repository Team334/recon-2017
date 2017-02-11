import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ListView,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default class Match extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styles = this.props.match.color == "red" ? red : blue;

        return (
            <View style={styles.match}>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{this.props.match.team}</Text>
                    <Text style={styles.matchNum}>#{this.props.match.match}</Text>
                </View>
                <View style={styles.content}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={styles.card}>
                            <Text style={styles.text}>Score</Text>
                            <Text style={[styles.text, styles.score]}>{this.props.match.end.score}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.text}>Fouls</Text>
                            <Text style={[styles.text, styles.score]}>{this.props.match.end.fouls}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.text}>Gears</Text>
                            <Text style={[styles.text, styles.score]}>{this.props.match.teleop.gears_on_ship}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.text}>Balls</Text>
                            <Text style={[styles.text, styles.score]}>{this.props.match.teleop.balls_in_boiler}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const red = StyleSheet.create({
    match: {
        height: 90,
        backgroundColor: '#FE5E62',

        borderRadius: 10,

        marginTop: 10,

        flexDirection: 'row',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.1,

        paddingRight: 5,
    },
    numberContainer: {
        width: 90,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#FE3B40',

        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    number: {
        color: '#ebf7f9',

        fontSize: 25,
    },
    matchNum: {
        color: '#ebf7f9',

        fontSize: 15,
    },
    content: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,

        flex: 1,

        flexDirection: 'row',
    },
    card: {
        width: 70,
        backgroundColor: '#ebf7f9',

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10,

        shadowColor: '#000000',
        shadowRadius: 3,
        shadowOpacity: 0.1,
    },
    text: {
        color: '#FE3B40',

        backgroundColor: 'transparent',
    },
    score: {
        fontSize: 38,
        lineHeight: 38,

        marginTop: 5,

        textAlign: 'center',
    }
});

const blue = StyleSheet.create({
    match: {
        height: 90,
        backgroundColor: '#5E8FDC',

        borderRadius: 10,

        marginTop: 10,

        paddingRight: 5,

        flexDirection: 'row',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    numberContainer: {
        width: 90,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#3E75CC',

        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    number: {
        color: '#ebf7f9',

        fontSize: 25,
    },
    matchNum: {
        color: '#ebf7f9',

        fontSize: 15,
    },
    content: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,

        flex: 1,

        flexDirection: 'row',
    },
    card: {
        width: 70,
        backgroundColor: '#ebf7f9',

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10,

        shadowColor: '#000000',
        shadowRadius: 3,
        shadowOpacity: 0.1,
    },
    text: {
        color: '#3E75CC',

        backgroundColor: 'transparent',
    },
    score: {
        fontSize: 38,
        lineHeight: 38,

        marginTop: 5,

        textAlign: 'center',
    }
});


