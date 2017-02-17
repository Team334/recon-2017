import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ListView,
    StyleSheet,
    ScrollView,
    InteractionManager,
} from 'react-native';

import { connect } from 'react-redux';

import Match from './Match';

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginTop: 5,
        marginBottom: 70,
    },
    innerContainer: {
        alignItems: 'center',

        marginHorizontal: 20,

        paddingBottom: 10,
    },
});

class Matches extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            matches: this.ds.cloneWithRows(this._filter(this.props.matches, props.sort)),
            ready: true,
        };

        this._renderMatch = this._renderMatch.bind(this);
        this._filter = this._filter.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps == this.props) return;

        this.setState({ready: false}, () =>
            InteractionManager.runAfterInteractions(() =>
                this.setState({
                    matches: this.ds.cloneWithRows(this._filter(nextProps.matches, nextProps.sort)),
                    ready: true,
                })
            )
        );
    }

    _filter(matches, sort) {
        if (sort.query == "") {
            return matches;
        }

        return matches.filter((match) => {
            if (sort.type == "match" && match.match != sort.query) {
                return false;
            } else if (sort.type == "team" && match.team != sort.query) {
                return false;
            }

            return true;
        });
    }

    _renderMatch(match) {
        return <Match match={match} />;
    }

    render() {
        return this.state.ready ? (
            <ListView
                dataSource={this.state.matches}
                initialListSize={5}
                enableEmptySections={true}
                renderRow={(rowData) => this._renderMatch(rowData)}
                style={styles.container}
                contentContainerStyle={styles.innerContainer}
            />
        ) : null;
    }
}

export default connect((state) => {
    return {
        matches: state.matches
    };
}, null)(Matches);
