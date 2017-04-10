import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import Networking from '../../../utils/Networking';

import Search from '../../../components/Search';
import Teams from '../../../components/Teams';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class AnalyzeMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Search />
                <Teams />
            </View>
        );
    }
}

export default AnalyzeMain;
