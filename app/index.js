import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator
} from 'react-native';

import Routes from './config/routes';

export default class Recon extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Navigator
                initialRoute={Routes[0]}
                renderScene={(route, navigator) => {
                    return route.renderScene(navigator);
                }}
                configureScene={(route, routeStack) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
            />
        );
    }
}
