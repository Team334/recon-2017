import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Animated,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const DX = 150;
const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        flexDirection: 'row'
    },
    toggle: {
        top: 50,
        width: 32,
        height: 34,
    },
    sidebar: {
        position: 'absolute',
        left: -DX,
        width: DX,
        backgroundColor: '#007AFF',
        height: Dimensions.get('window').height,

        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

        paddingTop: 10 
    }
});

export default class Drawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moveAnimation: new Animated.Value(0),
            opened: false
        };

        this.act = this.act.bind(this);
    }

    act() {
        Animated.timing(this.state.moveAnimation, {
            toValue: this.state.opened ? 0 : DX,
            duration: 500
        }).start();

        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        return (
            <Animated.View style={{ left: this.state.moveAnimation }}>
                <View style={styles.navbar}>
                    <View style={styles.sidebar}>
                        { this.props.children }
                    </View>
                    <TouchableHighlight onPress={this.act} style={styles.toggle}>
                        <Icon
                            name="grid" 
                            size={30}
                            color="#ebf7f9" 
                            style={{backgroundColor: "#007AFF"}}
                            borderRadius={0}
                        /> 
                    </TouchableHighlight>
                </View>
            </Animated.View> 
        );
    }
}
