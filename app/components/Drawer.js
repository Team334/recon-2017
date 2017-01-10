import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
    },
    toggle: {
        marginRight: 1,
    },
    sidebar: {
    }
});

const act = () => {
    destination = this.state.moveAnimation == 0 ? 50 : 0;

    Animated.timing(this.state.moveAnimation, {
        toValue: destination,
        duration: 750
    }).start();
};

const DX = 200;
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
            <Animated.View
                style={{
                    left: this.state.moveAnimation
                }}
            >
                <View style={styles.sidebar}>

                </View>

                <Icon.Button 
                    name="grid" 
                    size={30} 
                    color="#ebf7f9" 
                    borderRadius={0}
                    onPress={this.act}
                    iconStyle={styles.toggle}>
                </Icon.Button>
            </Animated.View> 
        );
    }
}
