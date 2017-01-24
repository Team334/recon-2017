import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import TeamSelect from '../../../containers/TeamSelect';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        padding: 10, 
    },
});

class CollectMatch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TeamSelect />
            </View>
        ); 
    }
}

export default connect()(CollectMatch);
