import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Modal,
    TouchableOpacity,
    Navigator,
    Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import Routes from '../../config/routes';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

class Main extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            collect: false,
        };

    }

    toggleModal = (state) => {
        this.setState({
            collect: state
        });
    };

    componentDidMount() {
        this.toggleModal(false);
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.collect}
                    onRequestClose={() => this.toggleModal(false)}
                >
                    <View style={styles.fixed}>
                        <View style={styles.modal}>
                            <View style={styles.closeContainer}>
                                <MaterialIcon.Button
                                    name="close"
                                    size={30}
                                    color="#ebf7f9"
                                    style={{backgroundColor: "#125cd3"}}
                                    borderRadius={0}
                                    onPress={() => this.toggleModal(false)}
                                >
                                    Collect
                                </MaterialIcon.Button>
                            </View>
                            <Navigator
                                initialRoute={Routes.COLLECT.CHOICES}
                                renderScene={(route, navigator) => {
                                    return route.render(navigator);
                                }}
                                configureScene={(route, routeStack) => {
                                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                                }}
                            />
                        </View>
                    </View>
                </Modal>
                <View style={styles.nav}>
                    <View style={styles.navButton}>
                        <TouchableOpacity onPress={() => this.toggleModal(true)}>
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
                        <TouchableOpacity onPress={() => {}}>
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

export default connect(state => {
    return { user: state.user };
}, null)(Main);

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    fixed: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        bottom: 40,

        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').height - 100,

        backgroundColor: '#ebf7f9',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.2,

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    closeContainer: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        overflow: 'hidden'
    },
    logo: {
        width: 80,
        height: 80,
        bottom: 10
    },
    nav: {
        backgroundColor: '#ebf7f9',

        height: 70,
        top: Dimensions.get('window').height - 70,

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.05
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
});
