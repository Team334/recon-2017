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
    },
    teamContainer: {
        flex: 1,
        marginTop: 5,
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
                <View style={styles.teamContainer}>
                    <Teams />
                </View>
            </View>
        );
    }
}

export default AnalyzeMain;
