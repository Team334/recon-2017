import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity
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
        backgroundColor: '#ebf7f9',
        paddingBottom: 80 
    },
    logo: {
        width: 100,
        height: 100 
    },
    input: {
        textAlign: 'center',
        height: 40,
        borderBottomColor: '#000000',
    },
    button: {
        color: '#1E5AB8',
        fontSize: 16
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
                    width={200}
                    maxLength={20}
                    underlineColorAndroid="transparent"
                    style={styles.input}
                />
                <TouchableOpacity
                    style={{margin: 5}}
                    onPress={() => this.props.navigator.push(Routes.MAIN)}
                >
                    <Text style={styles.button}>enter</Text>
                </TouchableOpacity>
            </View>
        );
    }
};
