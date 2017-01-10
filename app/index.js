import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator,
    View,
    StatusBar
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './config/routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebf7f9"
    },
});

let store = createStore((state, action) => {
    return state;
});

export default class Recon extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <StatusBar hidden={true} />
                    <Navigator
                        initialRoute={Routes[0]}
                        renderScene={(route, navigator) => {
                            return route.renderScene(navigator);
                        }}
                        configureScene={(route, routeStack) => {
                            return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                        }}
                    />
                </View>
            </Provider>
        );
    }
}
