import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import Routes from '../config/routes';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        margin: 10,

        overflow: 'hidden',
        flexDirection: 'column',
    },
    display: {
        shadowColor: '#d0e1fb',
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,

        backgroundColor: '#5E8FDC',
        borderRadius: 5,
        flexDirection: 'row',
    },
    team: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.1,

        width: 235,

        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        borderLeftWidth: 3,
        borderColor: '#ebf7f9',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

        height: 50,
        width: 65,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#5E8FDC',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    teams: {
        backgroundColor: '#5E8FDC',
        borderRadius: 5,
        padding: 5,

        shadowColor: '#d0e1fb',
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,

        marginTop: 5,

        height: 100,
        width: 235,

        flex: 1,
    },
    teamSelect: {
        color: '#fff',
        fontSize: 20,
    },
    teamSelectContainer: {
        margin: 2,
    }
});

class TeamSelect extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            search: new Animated.Value(50),
            opacity: new Animated.Value(0),

            teams: this.ds.cloneWithRows(this.props.teams.sort((a, b) => a.number - b.number))
        };

        this.search = this.search.bind(this);
        this.renderTeam = this.renderTeam.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    search(status) {
        Animated.timing(this.state.search, {
            toValue: status ? 200 : 50,
            duration: 500,
        }).start();
        Animated.timing(this.state.opacity, {
            toValue: status ? 1 : 0,
            duration: 500,
        }).start();
    }

    renderFooter() {
        return (
            <TouchableOpacity style={styles.teamSelectContainer} onPress={() => {
                this.search(false);
                this.props.navigator.push(Routes.COLLECT.TEAM);
            }}>
                <Text style={styles.teamSelect}> Add Team </Text>
            </TouchableOpacity>
        );
    }

    renderTeam(data) {
        return (
            <TouchableOpacity style={styles.teamSelectContainer} onPress={() => {
                this.search(false);
                this.setState({team: "Team " + data.number});

                if (this.props.onSelect) {
                    this.props.onSelect(data.number);
                }
            }}>
                <Text style={styles.teamSelect}> Team {data.number} </Text>
            </TouchableOpacity>

        );
    }

    render() {
        return (
            <Animated.View style={[{height: this.state.search}, styles.container]}>
                <View style={styles.display}>
                    <View style={styles.team}>
                        <Text style={styles.teamSelect}>{this.state.team}</Text>
                    </View>
                    <View style={styles.select}>
                        <TouchableOpacity
                            onPress={() => this.search(true)}
                        >
                            <MaterialIcon
                                name= "arrow-down-drop-circle-outline"
                                size={30}
                                color="#ebf7f9"
                                style={{backgroundColor: "#5E8FDC"}}
                                borderRadius={5}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Animated.View style={[{opacity: this.state.opacity}, styles.teams]}>
                    <ListView
                        dataSource={this.state.teams}
                        initialListSize={0}
                        enableEmptySections={true}
                        renderFooter={this.renderFooter}
                        renderRow={(rowData) => this.renderTeam(rowData)}
                    />
                </Animated.View>
            </Animated.View>
        );
    }
}

export default connect((state) => {
    return {
        teams: state.teams
    };
}, null)(TeamSelect);
