import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Modal,
    Animated,
    Navigator,
    Dimensions,
    TouchableOpacity,
} from 'react-native'; 
import Networking from '../../utils/Networking';

import { connect } from 'react-redux';

import Routes from '../../config/routes';
import Matches from '../../containers/Matches';
import Search from '../../components/Search';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

class Main extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.requireBackButton = this.requireBackButton.bind(this);
        this.updateBack = this.updateBack.bind(this);
        this._sort = this._sort.bind(this);

        this.state = {
            modal: false,
            back: false,

            sort: {
                type: "match",
                query: "",
            },
        };

        this.conn = Networking.connect(this.props.dispatch);
    }

    toggleModal = (modal, mode = this.state.mode) => {
        let scene = mode == "Collect" ? Routes.COLLECT.CHOICES : Routes.ANALYZE.MAIN;
        this.setState({modal, mode, scene});
    };

    requireBackButton = () => {
        if (this.state.back) { return (
                <MaterialIcon.Button
                    name="chevron-left"
                    size={35}
                    color="#ebf7f9"
                    style={{backgroundColor: "#1E5AB8"}}
                    borderRadius={0}
                    onPress={() => this.refs.innerNav.pop()}
                />
            );
        } else {
            return (
                <MaterialIcon.Button name="chevron-left"
                    size={35}
                    color="#1E5AB8"
                    style={{backgroundColor: "#1E5AB8"}}
                    borderRadius={0}
                    onPress={() => this.refs.innerNav.pop()}
                />
            );
        }
    };

    _sort(query) {
        if (this.state.sort.query == query) return;

        this.setState({
            sort: Object.assign({}, this.state.sort, {query})
        });
    }

    updateBack = () => {
        this.setState({
            back: this.refs.innerNav && this.refs.innerNav.getCurrentRoutes().length > 1
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modal}
                    onRequestClose={() => this.toggleModal(false)}
                >
                    <View style={styles.fixed}>
                        <View style={styles.modal}>
                            <View style={styles.closeContainer}>
                                {this.requireBackButton()}
                                <Text style={styles.modalTitle}> {this.state.mode} </Text>
                                <MaterialIcon.Button
                                    name="close"
                                    size={35}
                                    color="#ebf7f9"
                                    style={{backgroundColor: "#1E5AB8"}}
                                    borderRadius={0}
                                    onPress={() => this.toggleModal(false)}
                                />
                            </View>

                            <Navigator
                                ref="innerNav"
                                initialRoute={this.state.scene}
                                renderScene={(route, navigator) => {
                                    return route.render(navigator, this.conn);
                                }}
                                configureScene={(route, routeStack) => {
                                    return {
                                        ...Navigator.SceneConfigs.HorizontalSwipeJumpFromRight,
                                        gestures: {},
                                    }
                                }}
                                onDidFocus={(e) => this.updateBack()}
                            />
                        </View>
                    </View>
                </Modal>
                <Search onSearch={(input) => this._sort(input)} />
                <Matches conn={this.conn} sort={this.state.sort} />
                <View style={styles.nav}>
                    <View style={styles.navButton}>
                        <TouchableOpacity onPress={() => this.toggleModal(true, "Collect")}>
                            <View style={styles.buttonContainer}>
                                <MaterialIcon
                                    name="pen"
                                    size={20}
                                />
                                <Text> Collect </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navButton}>
                        <Image
                            source={require('../../images/logo.png')}
                            style={styles.logo}
                         />
                    </View>
                    <View style={styles.navButton}>
                        <TouchableOpacity onPress={() => this.toggleModal(true, "Analyze")}>
                            <View style={styles.buttonContainer}>
                                <AwesomeIcon
                                    name="bar-chart-o"
                                    size={20}
                                />
                                <Text> Analyze </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

export default connect()(Main);

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    topBar: {
        marginTop: 10,
        marginHorizontal: 20,
        height: 20,

        backgroundColor: '#5E8FDC',

        flex: 1,
        flexDirection: 'row',

        shadowColor: '#000000',
        shadowRadius: 3,
        shadowOpacity: 0.1,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
    },
    search: {
        flex: 1,

        backgroundColor: '#ebf7f9',
    },
    fixed: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        bottom: 40,

        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').height - 100,

        backgroundColor: '#ebf7f9',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.2,

        elevation: 5,

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    closeContainer: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        padding: 5,

        height: 50,

        overflow: 'hidden',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: '#1E5AB8'
    },
    modalTitle: {
        color: '#ebf7f9',
        fontSize: 25,
    },
    logo: {
        width: 80,
        height: 80,
        bottom: 10,
    },
    nav: {
        position: 'absolute',

        backgroundColor: '#ebf7f9',

        height: 70,
        width: Dimensions.get('window').width,
        top: Dimensions.get('window').height - 70,

        flexDirection: 'row',
        justifyContent: 'space-between',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.1,

        elevation: 20,

        zIndex: 1,
    },
    navButton: {
        width: 110,
        height: 70,

        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
    },
    horizontal: {
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 1.0,

        height: 2,
        backgroundColor: '#cbcbcb',

        marginHorizontal: 20,
    }
});
