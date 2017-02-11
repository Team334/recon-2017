import React, { Component } from 'react';
import {
    Text,
    View,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        color: '#ebf7f9',
        fontSize: 20, 

        paddingBottom: 4,
    },
    control: {
        backgroundColor: "#5E8FDC", 
        textAlign: 'center',

        lineHeight: 35,
    }
});

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            opacity: new Animated.Value(1),
        };

        this._change = this._change.bind(this);
    }

    _change(delta) {
        let count = this.state.count + delta < 0 ? 0 : this.state.count + delta;

        if (this.props.max != undefined && count > this.props.max) {
            count = this.props.max;
        }

        this.setState({ count }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state.count);
            }
        });

        Animated.sequence([
            Animated.timing(this.state.opacity, {
                toValue: 0.8,
                duration: 100,
            }),
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 100,
            }),

        ]).start();
    }

    render() {
        if (this.props.small) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this._change(-1)}
                    >
                        <MaterialIcon
                            name="chevron-left"
                            size={35}
                            color="#ebf7f9"
                            style={styles.control}
                            borderRadius={0}
                        />
                    </TouchableOpacity>
                    <Animated.View style={{opacity: this.state.opacity}}>
                        <Text style={styles.number}> {this.state.count} </Text>
                    </Animated.View>
                    <TouchableOpacity
                        onPress={() => this._change(1)}
                    >
                        <MaterialIcon
                            name="chevron-right"
                            size={35}
                            color="#ebf7f9"
                            style={styles.control}
                            borderRadius={0}
                        />
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this._change(-5)}
                    >
                        <MaterialIcon
                            name="chevron-double-left"
                            size={35}
                            color="#ebf7f9"
                            style={styles.control}
                            borderRadius={0}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._change(-1)}
                    >
                        <MaterialIcon
                            name="chevron-left"
                            size={35}
                            color="#ebf7f9"
                            style={styles.control}
                            borderRadius={0}
                        />
                    </TouchableOpacity>
                    <Animated.View style={{opacity: this.state.opacity}}>
                        <Text style={styles.number}> {this.state.count} </Text>
                    </Animated.View>
                    <TouchableOpacity
                        onPress={() => this._change(1)}
                    >
                        <MaterialIcon
                            name="chevron-right"
                            size={35}
                            color="#ebf7f9"
                            style={styles.control}
                            borderRadius={0}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._change(5)}
                    >
                        <MaterialIcon
                            name="chevron-double-right"
                            size={35}
                            color="#ebf7f9"
                            style={styles.control}
                            borderRadius={0}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
    }
}
