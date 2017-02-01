import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Routes from '../../../config/routes';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 20,
        borderRadius: 5,

        backgroundColor: '#3e75cc',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        width: 200,
        height: 125,
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
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigator.push(Routes.COLLECT.TEAM)}
                    }
                    style={styles.button}
                >
                    <MaterialIcon
                        name="account-multiple"
                        size={35}
                        color="#ebf7f9"
                        style={{backgroundColor: "#3E75CC"}}
                        borderRadius={0}
                    />

                    <Text style={styles.text}> Team </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigator.push(Routes.COLLECT.MATCH)}
                    }
                    style={styles.button}
                >
                    <MaterialIcon
                        name="trophy"
                        size={35}
                        color="#ebf7f9"
                        style={{backgroundColor: "#3E75CC"}}
                        borderRadius={0}
                    />
                    <Text style={styles.text}> Match </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
