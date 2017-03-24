import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import Svg, {
    Line,
    Polyline
} from 'react-native-svg';

import { connect } from 'react-redux';

import Bar from '../../../components/Bar';
import Matches from '../../../containers/Matches';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    section: {
        backgroundColor: '#5E8FDC',
        borderRadius: 5,
        flex: 1,

        shadowColor: '#000000',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 0,
        },

        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    graphContainer: {
        margin: 5,

        borderRadius: 5,
        backgroundColor: '#ebf7f9',

        height: 250,

        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 0,
        },


        justifyContent: 'center',
        alignItems: 'center',
    }
});

class AnalyzeTeam extends Component {
    constructor(props) {
        super(props);

        this._generateGraph = this._generateGraph.bind(this);

        this.state = {
            width: 0,
            height: 0,
        };

    }

    componentDidMount() {
        requestAnimationFrame(() => this.refs.graphContainer.measure((ox, oy, width, height, px, py) => {
            this.setState({width, height: width * (3/4)});
        }));
    }

    _generateGraph() {
        let id = 0;
        let elements = [];

        for (let i = 0; i < 16; i++) {
            elements.push(
                <Line
                    key={(id++).toString()}
                    x1="15"
                    y1={(i * ((this.state.height - 30) / 15) + 15).toString()}
                    x2={(this.state.width - 15).toString()}
                    y2={(i * ((this.state.height - 30) / 15) + 15).toString()}
                    stroke="#5E8FDC"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeOpacity={i == 15 ? "1" : "0.7"}
                />
            );
        }

        const lines = [{
            mode: "end",
            field: "score",
            color: "#59838B",
            max: 300,
        }, {
            mode: "teleop",
            field: "gears_on_ship",
            color: "#4D98E4",
            max: 8,
        }, {
            mode: "teleop",
            field: "hoppers_activated",
            color: "#418E50",
            max: 4,
        }, {
            mode: "end",
            field: "fouls",
            color: "#787FEC",
            max: 4,
        }];

        if (this.props.matches.length <= 1) {
            return elements;
        }

        const xOffset = (this.state.width - 30) / (this.props.matches.length / 2);
        for (let i = 0; i < lines.length; i++) {
            let path = "";

            for (let j = 0; j < this.props.matches.length; j++) {
                let percentage = this.props.matches[j][lines[i].mode][lines[i].field] / lines[i].max;
                let y = (this.state.height - percentage * (this.state.height - 30)) - 15;
                let x = ((this.props.matches.length - 1 - j) * ((this.state.width - 60) / (this.props.matches.length - 1))) + 30;
                path += x + "," + y + " ";
            }

            elements.push(
                <Polyline
                    key={id++}
                    points={path}
                    fill="none"
                    stroke={lines[i].color}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            );
        }

        return elements;
    }

    render() {
        const sword = <MaterialIcon name="sword" size={35} color="#ebf7f9" style={{backgroundColor: "transparent"}} borderRadius={0} />;
        const trophy = <MaterialIcon name="trophy" size={33} color="#ebf7f9" style={{backgroundColor: "transparent"}} borderRadius={0} />;
        const point = <MaterialIcon name="checkbox-blank-circle" size={31} color="#ebf7f9" style={{backgroundColor: "transparent"}} borderRadius={0} />;
        const gear = <FontAwesomeIcon name="gear" size={31} color="#ebf7f9" style={{backgroundColor: "transparent"}} borderRadius={0} />;
        const hopper = <EntypoIcon name="shopping-bag" size={30} color="#ebf7f9" style={{backgroundColor: "transparent"}} borderRadius={0} />;
        const exclamation = <FontAwesomeIcon name="exclamation" size={30} color="#ebf7f9" style={{backgroundColor: "transparent"}} borderRadius={0} />;

        const svg = this.state.width != 0 && (
            <Svg width={this.state.width} height={this.state.height}>
                {this._generateGraph()}
            </Svg>
        );

        return (
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Bar color="#F55443" hint="Offensive Power Rating" icon={sword} amount={100} full={100} />
                    <Bar color="#FCBD24" hint="Calculated Contrib. to Winning Margin" icon={trophy} amount={50} full={100} />
                    <Bar color="#59838B" hint="Average Points" icon={point} amount={80} full={300} />
                    <Bar color="#4D98E4" hint="Average Gears" icon={gear} amount={3} full={8} />
                    <Bar color="#418E50" hint="Average Hoppers Activated" icon={hopper} amount={2} full={4} />
                    <Bar color="#7B7FEC" hint="Average Fouls" icon={exclamation} amount={1} full={4} />
                </View>
                <View style={[styles.section]}>
                    <View ref="graphContainer" onLayout={() => {}} style={[styles.graphContainer, {height: this.state.height}]}>
                        {svg}
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Matches hideLoader={true} sort={{type: 'team', query: this.props.team}} />
                </View>
            </ScrollView>
        );
    }
};

export default connect((state, ownProps) => {
    return {
        matches: state.matches.filter(match => {
            if (match.team != ownProps.team) {
                return false;
            }

            return true;
        })
    };
})(AnalyzeTeam);
