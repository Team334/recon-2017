import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import Drawer from '../../components/Drawer';

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        width: 75,
        height: 75 
    }
});

const Main = (navigator) => {
    return (
        <View style={styles.container}>
            <Drawer>
                <Image 
                    source={require('../../images/logo.png')}
                    style={styles.logo}
                 />
            </Drawer>
        </View>
    );
};

export default Main;
