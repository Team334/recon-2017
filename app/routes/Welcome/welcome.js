import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Button,
    TextInput,
    View
} from 'react-native';

import { connect } from 'react-redux';
import { setName } from '../../actions/name';

import Name from '../../containers/Name';
import Routes from '../../config/routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebf7f9'
    },
    logo: {
        width: 75,
        height: 75
    },
    input: {
        textAlign: 'center',
        height: 40,
        borderBottomColor: '#000000'
    },
    button: {
        backgroundColor: 'skyblue',
        color: 'white'
    }
});

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../../images/logo.png')}
                    style={styles.logo}
                 />
                <Name 
                    placeholder="name"
                    maxLength={20}
                    style={styles.input} 
                />
                <Button
                    title="enter"
                    style={styles.button}
                    onPress={() => this.props.navigator.push(Routes[1])}
                />
            </View>
        );
    }
};
