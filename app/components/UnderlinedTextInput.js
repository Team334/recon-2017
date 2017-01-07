import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#000',
        borderBottomWidth: 0.3,
        height: 40,
        width: 70
    },
});

export default class UnderlinedTextInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    {...this.props}
                />
            </View>
        )
    }
}
