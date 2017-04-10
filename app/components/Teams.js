import React, { Component } from 'react';
import {
    View,
    ListView,
    StyleSheet
} from 'react-native';

import Networking from '../utils/Networking';

import Team from '../components/Team';

const styles = StyleSheet.create({
});

export default class Teams extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            teams: ds        
        }

        this._renderTeam = this._renderTeam.bind(this);
    }

    componentDidMount() {
        Networking.requestRankings((rankings) => console.warn(rankings));
    }

    componentWillUpdate(nextProps, nextState) {

    }

    _renderTeam(team) {
        if (team == undefined) {
            return null;
        }

        return (
            <Team
                team={team}
                onTeamPress={this.props.onTeamPress}
            />
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.state.teams}
                initialListSize={5}
                enableEmptySections={true}
                renderRow={(rowData) => this._renderTeam(rowData)}
                style={styles.container}
                contentContainerStyle={styles.innerContainer}
            />
        );
    }
}
