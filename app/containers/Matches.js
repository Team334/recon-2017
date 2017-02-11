import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ListView,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { connect } from 'react-redux';

import Match from './Match';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        alignItems: 'center',

        marginHorizontal: 20,
    },
});

class Matches extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            matches: this.ds.cloneWithRows(this.props.matches),

            left: false,
            right: true,
        };

        this._renderMatch = this._renderMatch.bind(this);
    }

    _renderMatch(match) {
        return <Match match={match} />;
    }

    render() {
        let matches = this.ds.cloneWithRows(this.props.matches);

        return (
            <ListView
                dataSource={matches}
                initialListSize={0}
                enableEmptySections={true}
                renderRow={(rowData) => this._renderMatch(rowData)}
                style={styles.container}
                contentContainerStyle={styles.innerContainer}
            />
        );
    }
}

export default connect((state) => {
    return {
        matches: state.matches
    };
}, null)(Matches);
