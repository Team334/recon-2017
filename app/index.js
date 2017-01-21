import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator,
    View,
    StatusBar
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import userReducers from './reducers/users';
import teamReducers from './reducers/teams';

import Routes from './config/routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebf7f9"
    },
});

let store = createStore(combineReducers({ user: userReducers, teams: teamReducers  }));

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
                        initialRoute={Routes.WELCOME}
                        renderScene={(route, navigator) => {
                            return route.render(navigator);
                        }}
                        configureScene={(route, routeStack) => {
                            return Navigator.SceneConfigs.FloatFromBottom;
                        }}
                    />
                </View>
            </Provider>
        );
    }
}
