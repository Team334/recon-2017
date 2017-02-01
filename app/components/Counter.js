import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    container: {
    }
});

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    _change(delta) {
        this.state = {
            count: this.state.count + delta
        }

        if (this.props.onChange) {
            this.props.onChange(this.state.count);
        }
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}
