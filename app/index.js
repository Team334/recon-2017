import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Recon extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Hello </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
