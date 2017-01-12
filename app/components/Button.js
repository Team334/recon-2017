import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    button: {
    }
});

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight 
                onPress={this.props.onPress} 
                style={styles.button}>
                <Text style={this.props.style}> {this.props.text} </Text>
            </TouchableHighlight>
        );
    }
}
