import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';



const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',

        padding: 10
    },
    row: {
        flexDirection: 'row',
        padding: 10, 
    }
});

class CollectMatch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                </View>
            </View>
        ); 
    }
}

export default connect()(CollectMatch);
