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

import { connect } from 'react-redux';
import TeamSelect from '../../../containers/TeamSelect'; import UnderlinedTextInput from '../../../components/UnderlinedTextInput.js';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    teams: {
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    form: {
        backgroundColor: '#5E8FDC',

        borderRadius: 5,

        width: 300,
        height: 420,

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
        borderTopRightRadius: 5
    },
    tab: {
        margin: 10,
    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 290,

        margin: 5,
    },
    matchNum: {
        textAlign: 'center',
        height: 40,
        borderBottomColor: '#000000',

        fontSize: 30,
        color: '#fff' }
});

class CollectMatch extends Component {
    constructor(props) {
        super(props);

        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo(index) {
        this.refs.scroll.scrollTo({
            x: (index * 300)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TeamSelect navigator={this.props.navigator} />
                <View style={styles.form}>
                    <View style={styles.tabbar}>
                        <TouchableOpacity 
                            style={styles.tab}
                            onPress={() => this.scrollTo(0)}
                        >
                            <EntypoIcon
                                name="clipboard"
                                size={24}
                                color="#ebf7f9"
                                style={{backgroundColor: "#5E8FDC"}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.tab} 
                            onPress={() => this.scrollTo(1)}
                        >
                            <MaterialIcon
                                name="chip"
                                size={35}
                                color="#ebf7f9"
                                style={{backgroundColor: "#5E8FDC"}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.tab}
                            onPress={() => this.scrollTo(2)}
                        >
                            <MaterialIcon
                                name="xbox-controller"
                                size={35}
                                color="#ebf7f9"
                                style={{backgroundColor: "#5E8FDC"}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.tab}
                            onPress={() => this.scrollTo(3)}
                        >
                            <MaterialIcon
                                name="flag-variant"
                                size={35}
                                color="#ebf7f9"
                                style={{backgroundColor: "#5E8FDC"}}
                                borderRadius={0}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ScrollView
                            horizontal={true}
                            snapToInterval={300}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ height: 360 }}
                            ref="scroll"
                        >
                            <View style={styles.screen}>
                                <UnderlinedTextInput
                                    placeholder="match"
                                    maxLength={3}
                                    width={200}
                                    style={styles.matchNum}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.screen}>
                                <Text>Placeholder: Hello</Text>
                            </View>
                            <View style={styles.screen}>
                                <Text>Placeholder: World</Text>
                            </View>
                            <View style={styles.screen}>
                                <Text>Placeholder: Blah</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect()(CollectMatch);
