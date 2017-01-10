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
});

const Main = (navigator) => {
    return (
        <View style={styles.container}>
            <Drawer />
        </View>
    );
};

export default Main;
