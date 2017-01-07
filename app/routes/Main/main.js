import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const Main = (navigator) => {
    return (
        <View style={styles.container}>
            <Text>Main Screen WIP</Text>
        </View>
    );
};

export default Main;
