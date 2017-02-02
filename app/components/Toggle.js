import React, { Component } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        marginTop: 15,
        marginBottom: 15,
    },
    slide: { 
        backgroundColor: '#3E75CC',
        width: 70,
        height: 30,

        borderRadius: 20,
    },
    shadow: {
        flex: 1,

        height: 70,
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#5E8FDC',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, height: 0
        },
        shadowRadius: 4,
        shadowOpacity: 0.5,
    },
    circle: {
        position: 'absolute',

        backgroundColor: '#ebf7f9',
        width: 40,
        height: 40,
        borderRadius: 30,

        top: -5,

        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 0.2,

        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 30,

        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,

            left: new Animated.Value(0)
        };

        this._toggle = this._toggle.bind(this); 
    }

    _toggle() {
        this.setState({
            checked: !this.state.checked
        }, () => {
            if (this.props.onCheck) {
                this.props.onCheck(this.state.checked);
            }
        });

        Animated.timing(this.state.left, {
            toValue: this.state.checked ? 0 : 30,
        }).start();
    }

    render() {
        let icon = this.state.checked ? ( 
            <MaterialIcon
                name="check"
                size={25}
                color="#5E8FDC"
                style={{backgroundColor: '#ebf7f9'}}
            />
        ) : (
            <MaterialIcon
                name="close"
                size={25}
                color="#5E8FDC"
                style={{backgroundColor: '#ebf7f9'}}
            />
        );

        return (
            <View style={styles.container}>
                <View style={styles.toggle}>
                    <View style={styles.slide}> 
                        <View style={styles.shadow}>
                        </View>
                        <Animated.View style={[styles.circle, {left: this.state.left}]}>
                            <TouchableOpacity style={styles.icon} onPress={() => this._toggle()}>
                                {icon}
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </View>
        );
    }
};
