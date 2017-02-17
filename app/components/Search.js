import React, { Component } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

import OcticonsIcon from 'react-native-vector-icons/Octicons';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 20,
        height: 60,

        paddingHorizontal: 5,

        backgroundColor: '#5E8FDC',

        flexDirection: 'row',

        shadowColor: '#000000',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 0,
        },

        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#5E8FDC',

        alignItems: 'center',
    },
    transition: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

        height: 45,

        borderRadius: 7,
        padding: 5,
    },
    input: {
        flex: 1,

        marginLeft: 5,
        fontSize: 24,
    },
    iconContainer: {
        width: 50,

        borderLeftWidth: 2,
        borderColor: '#ebf7f9',

        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state ={
            bg: new Animated.Value(0),
            text: "",
            focused: false,
        };

        this._focus = this._focus.bind(this);
        this._blur = this._blur.bind(this);
        this._onText = this._onText.bind(this);

    }

    _onText(text) {
        this.setState({
            text
        });
    }

    _focus(b) {
        Animated.timing(this.state.bg, {
            toValue: b ? 100 : 0,
            duration: b ? 300 : 800,
        }).start();

        this.setState({
            focused: b
        });
    }

    _blur() {
        this._focus(false);

        if (this.props.onSearch) {
            this.props.onSearch(this.state.text);
        }
    }

    render() {
        const bg = this.state.bg.interpolate({
            inputRange: [0, 100],
            outputRange: ['rgba(94, 143, 220, 1)', 'rgba(235, 247, 249,1)']
        });

        const color = !this.state.focused ? "#ebf7f9" : "#5E8FDC";

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.container]}
                onPress={() => this.refs.input.focus()}
            >
                <Animated.View
                    style={[styles.transition, {backgroundColor: bg}]}
                >
                    <TextInput
                        ref="input"
                        maxLength={4}
                        keyboardType="numeric"
                        blurOnSubmit={false}
                        onFocus={() => this._focus(true)}
                        onBlur={() => this._blur(false)}
                        onChangeText={this._onText}
                        style={[styles.input, {color: color}]}
                        placeholder="####"
                    />
                    <View style={[styles.iconContainer, {borderColor: color}]}>
                        <OcticonsIcon
                            name="search"
                            size={26}
                            color={color}
                            style={{backgroundColor: "transparent"}}
                        />
                    </View>
                </Animated.View>
            </TouchableOpacity>
        );
    }
};
