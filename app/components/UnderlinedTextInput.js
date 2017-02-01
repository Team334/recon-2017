import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#4970b2',
        borderBottomWidth: 0.3,
        height: 40, 
    },
});

export default class UnderlinedTextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                <TextInput 
                    {...this.props}
                />
            </View>
        )
    }
}
