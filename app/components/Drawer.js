import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
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
        width: 50,
        height: 50,
        borderColor: 'white',
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

        paddingTop: 30
    }
});

const act = () => {
    destination = this.state.moveAnimation == 0 ? 50 : 0;

    Animated.timing(this.state.moveAnimation, {
        toValue: destination,
        duration: 750
    }).start();
};

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
                    <View style={styles.toggle}>
                        <Icon.Button 
                            name="grid" 
                            size={30} 
                            color="#ebf7f9" 
                            borderRadius={0}
                            onPress={this.act}>
                        </Icon.Button>
                    </View>
                </View>
            </Animated.View> 
        );
    }
}
