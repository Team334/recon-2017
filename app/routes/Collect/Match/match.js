import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Networking from '../../../utils/Networking';

import { connect } from 'react-redux'; import TeamSelect from '../../../containers/TeamSelect';
import { addMatch } from '../../../actions/match';

import UnderlinedTextInput from '../../../components/UnderlinedTextInput';
import ColorSelect from '../../../components/ColorSelect';
import Toggle from '../../../components/Toggle';
import Counter from '../../../components/Counter';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    form: {
        backgroundColor: '#5E8FDC',

        borderRadius: 5,

        flex: 1,

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.2
    },
    tabbar: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.2,

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        backgroundColor: '#3E75CC',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tab: {
        margin: 10,
    },
    matchNum: {
        textAlign: 'center',
        height: 40,
        borderBottomColor: '#000000',
        fontSize: 30,
        color: '#ebf7f9'
    },
    section: {
        flexDirection: 'row',

        borderColor: '#ebf7f9',
        borderBottomWidth: 1,

        flex: 1,

        marginHorizontal: 20,

        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    toggleSection: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',

        alignSelf: 'stretch',
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    counterSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 5,
    },
    sectionText: {
        color: '#ebf7f9',

        fontSize: 17,
    },
    submitText: {
        marginLeft: 5,
        marginRight: 5,
        bottom: 2
    },
    submitContainer: {
        maxHeight: 80,
        minHeight: 50,

        justifyContent: 'center',
        alignItems: 'center',

        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    submit: {
        flexDirection: 'row',
        width: 130,
        height: 50,
        bottom: 5,

        marginTop: 10,

        padding: 5,
        borderRadius: 25,

        shadowColor: '#000000',
        shadowRadius: 32,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,

        backgroundColor: '#3E75CC',

        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
});

class CollectMatch extends Component {
    constructor(props) {
        super(props);

        this._scrollTo = this._scrollTo.bind(this);
        this._set = this._set.bind(this);
        this._submit = this._submit.bind(this);

        this.state = {
            form: {
                team: '',
                match: '',
                color: '',
                auton: {
                    passed_baseline: false,
                    placed_gear: false,
                    shot_ball: false,
                },
                teleop: {
                    high: false,
                    low: false,

                    balls_in_boiler: 0,
                    gears_on_ship: 0,
                    hoppers_activated: 0,
                },
                end: {
                    climber: false,
                    fouls: 0,
                    score: 0
                }
            },
        };
    }

    componentDidMount() {
        requestAnimationFrame(() => this.refs.scrollContainer.measure((ox, oy, width, height, px, py) => {
            this.setState({scrollChild: {width}});
        }));
    }

    _submit() {
        this.props.conn.submitMatch(this.state.form);

        this.props.dispatch(addMatch(this.state.form));
        this.props.navigator.pop();
    }

    _scrollTo(index) {
        this.refs.scroll.scrollTo({
            x: (index * this.state.scrollChild.width)
        });
    }

    _set(key, val, mode = '') {
        const form = mode != '' ? {
            form: Object.assign({}, this.state.form, {
                [mode]: Object.assign({}, this.state.form[mode], {
                    [key]: val
                })
            })
        } : {
            form: Object.assign({}, this.state.form, {
                [key]: val
            })
        };

        this.setState(form);
    }

    render() {
        return (
            <View style={styles.container}>
                <TeamSelect
                    navigator={this.props.navigator}
                    onSelect={(team) => this._set('team', team)}
                />
                <View style={styles.form}>
                    <View style={styles.tabbar}>
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => this._scrollTo(0)}
                        >
                            <EntypoIcon name='clipboard'
                                size={24}
                                color='#ebf7f9'
                                style={{backgroundColor: '#3E75CC'}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => this._scrollTo(1)}
                        >
                            <MaterialIcon
                                name='chip'
                                size={35}
                                color='#ebf7f9'
                                style={{backgroundColor: '#3E75CC'}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => this._scrollTo(2)}
                        >
                            <MaterialIcon
                                name='xbox-controller'
                                size={35}
                                color='#ebf7f9'
                                style={{backgroundColor: '#3E75CC'}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => this._scrollTo(3)}
                        >
                            <MaterialIcon
                                name='flag-variant'
                                size={35}
                                color='#ebf7f9'
                                style={{backgroundColor: '#3E75CC'}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                    </View>
                    <View ref="scrollContainer" style={{flex: 1}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            ref='scroll'
                        >
                            <View style={this.state.scrollChild}>
                                <PrematchForm set={this._set} />
                            </View>
                            <View style={this.state.scrollChild}>
                                <AutonForm set={this._set} />
                            </View>
                            <View style={this.state.scrollChild}>
                                <TeleopForm set={this._set} />
                            </View>
                            <View style={this.state.scrollChild}>
                                <EndForm onSubmit={() => this._submit()} set={this._set} />
                                <View style={styles.submitContainer}>
                                    <TouchableOpacity
                                        style={styles.submit}
                                        onPress={() => this._submit()}
                                    >
                                        <Text style={[styles.sectionText, styles.submitText]}>Submit</Text>
                                        <MaterialIcon
                                            name='arrow-right'
                                            size={25}
                                            color='#ebf7f9'
                                            style={{backgroundColor: '#3E75CC'}}
                                            borderRadius={0}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

class PrematchForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <UnderlinedTextInput
                    placeholder='match'
                    maxLength={3}
                    width={200}
                    style={styles.matchNum}
                    keyboardType='numeric'
                    onChangeText={(text) => this.props.set('match', text)}
                />
                <ColorSelect onSelect={(color) => this.props.set('color', color)} />
            </ScrollView>
        );
    }
}

class AutonForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.section}>
                    <View style={styles.toggleSection}>
                        <Text style={styles.sectionText}>Passed</Text>
                        <Text style={styles.sectionText}>baseline</Text>
                    </View>
                    <View style={styles.toggleSection}>
                        <Toggle onCheck={(check) => this.props.set('passed_baseline', check, 'auton')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.sectionText}>Placed</Text>
                        <Text style={styles.sectionText}>gear</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Toggle onCheck={(check) => this.props.set('placed_gear', check, 'auton')} />
                    </View>
                </View>
                <View style={[styles.section, {borderBottomWidth: 0}]}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.sectionText}>Shot</Text>
                        <Text style={styles.sectionText}>ball</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Toggle onCheck={(check) => this.props.set('shot_ball', check, 'auton')} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

class TeleopForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.section}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.sectionText}>High</Text>
                        <Text style={styles.sectionText}>goal</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Toggle onCheck={(check) => this.props.set('high', check, 'teleop')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.sectionText}>Low</Text>
                        <Text style={styles.sectionText}>goal</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Toggle onCheck={(check) => this.props.set('low', check, 'teleop')} />
                    </View>
                </View>

                <View style={[styles.section, styles.counterSection]}>
                    <Text style={styles.sectionText}>Gears on ship</Text>
                    <Counter small={true} onChange={(val) => this.props.set('gears_on_ship', val, 'teleop')} />
                </View>

                <View style={[styles.section, styles.counterSection]}>
                    <Text style={styles.sectionText}>Hoppers activated</Text>
                    <Counter small={true} onChange={(val) => this.props.set('hoppers_activated', val, 'teleop')} />
                </View>

                <View style={[styles.section, styles.counterSection, {borderBottomWidth: 0}]}>
                    <Text style={styles.sectionText}>Balls in boiler</Text>
                    <Counter onChange={(val) => this.props.set('balls_in_boiler', val, 'teleop')} />
                </View>
            </ScrollView>
        ); }
}

class EndForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.section}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.sectionText}>Climber</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Toggle onCheck={(check) => this.props.set('climber', check, 'end')} />
                    </View>
                </View>
                <View style={[styles.section, styles.counterSection]}>
                    <Text style={styles.sectionText}>Fouls</Text>
                    <Counter small={true} onChange={(val) => this.props.set('fouls', val, 'end')} />
                </View>
                <View style={[styles.section, styles.counterSection, {borderBottomWidth: 0}]}>
                    <Text style={styles.sectionText}>Score</Text>
                    <Counter onChange={(val) => this.props.set('score', val, 'end')} />
                </View>
            </ScrollView>
        );
    }
}

export default connect()(CollectMatch);
