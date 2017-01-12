import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        background:
    }
});

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(1),
            hidden: false 
        };

        toggle();
    }

    toggle() {
        Animated.timing(this.state.opacity, {
            toValue: this.state.opacity ? 0 : 1,
            duration: 500
        });

        this.hidden = !this.hidden;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}
