import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Drawer from '../../components/Drawer';
import Button from '../../components/Button';

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        width: 75,
        height: 75, 
        padding: 5
    },
    button: {

    }
});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Drawer>
                    <Image 
                        source={require('../../images/logo.png')}
                        style={styles.logo}
                     />
                    <Text> {this.props.user} </Text>
                    <Button
                        text="Hello"
                        onPress={() => {}}
                        style={styles.button}
                    />
                </Drawer>

            </View>
        );
    }
};

export default connect(state => {
    console.warn(JSON.stringify(state));
    return { user: state.user };
}, null)(Main);
