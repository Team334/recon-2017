import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ListView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.match}>
                <View style={styles.numberContainer}>
                    <Text style={styles.matchNum}>Team</Text>
                    <TouchableOpacity onPress={() => this.props.onTeamPress && this.props.onTeamPress(this.props.match.team)}>
                        <Text style={styles.number}>{this.props.team.number}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={styles.card}>
                            <Text style={styles.text}>Score</Text>
                            <Text style={[styles.text, styles.score]}>{Math.ceil(this.props.team.avg_points)}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.text}>OPR</Text>
                            <Text style={[styles.text, styles.score]}>{Math.ceil(this.props.team.opr)}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.text}>CCWM</Text>
                            <Text style={[styles.text, styles.score]}>{Math.ceil(this.props.team.ccwm)}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.text}>Gears</Text>
                            <Text style={[styles.text, styles.score]}>{Math.ceil(this.props.team.avg_gears)}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    match: {
        height: 90,
        backgroundColor: '#5E8FDC',

        borderRadius: 10,

        marginTop: 10,

        paddingRight: 5,

        flexDirection: 'row',

        shadowColor: '#000000',
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 0,
        }
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

        fontSize: 20,
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

        textAlign: 'center',
    }
});
