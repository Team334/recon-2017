import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

import Routes from '../../../config/routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        margin: 10,
        padding: 20,
        borderRadius: 5,

        backgroundColor: '#125cd3',
    },
    text: {
        fontSize: 20,
        color: '#ebf7f9',
    } 
});

export default class CollectChoices extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigator.push(Routes.COLLECT.TEAM)}
                    }
                    style={styles.button}
                >
                    <Text style={styles.text}> Team </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigator.push(Routes.COLLECT.MATCH)}
                    }
                    style={styles.button}
                >
                    <Text style={styles.text}> Match </Text>
                </TouchableHighlight>
            </View>
        );
    }
}
