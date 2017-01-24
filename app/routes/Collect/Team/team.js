import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { addTeam } from '../../../actions/team';

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',

        padding: 10 
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',

        margin: 10,
    },
    input: {
        height: 30,

        textAlign: 'center',

        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,

        padding: 5,
    },
    addButton: {
        backgroundColor: "#125cd3",

        margin: 5,

        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,

        borderRadius: 5,
    },
    add: {
        color: "#ebf7f9",
        fontSize: 20,
    }
});

class CollectTeam extends Component {
    constructor(props) {
        super(props);

        this.state = { teamNumber: '' };

        this.handleTeamNumberInput = this.handleTeamNumberInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTeamNumberInput = (text) => {
        const allowed = "0123456789";
        let proper = "";

        for (var i = 0; i < text.length; i++) {
            let character = text[i];
            if (allowed.indexOf(character) == -1) {
                continue;
            }

            proper += character;
        }

        this.setState({teamNumber: proper});
    };

    handleSubmit = () => {
        if (this.state.teamNumber == "") {
            return;
        }

        this.props.dispatch(addTeam({
            number: this.state.teamNumber,
        }));

        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text> Team Number: </Text>
                    <TextInput
                        style={[styles.input, {width: 60}]}

                        placeholder="####"
                        maxLength={4}
                        keyboardType="numeric"

                        onChangeText={(text) => this.handleTeamNumberInput(text)}
                        value={this.state.teamNumber} 
                    />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.handleSubmit}>
                    <Text style={styles.add}> Add </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(CollectTeam);
