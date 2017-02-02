import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',

        margin: 10,
    }
});

export default class ColorSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ""
        };

        this.determine = this.determine.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    determine(color) {
        return this.state.color != color ? {
            opacity: 0.7,
        } : {};
    }

    setColor(color) {
        this.setState({ color }, () => {
            if (this.props.onSelect) {
                this.props.onSelect(color);
            }
        });
    }

    render() {
        return (
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => this.setColor("red")}
                >
                    <EntypoIcon
                        name="controller-record"
                        size={45}
                        color="#AA3939"
                        style={[this.determine("red"), {backgroundColor: "#5E8FDC"}]}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setColor("blue")}
                >
                    <EntypoIcon
                        name="controller-record"
                        size={45}
                        color="#2B4970"
                        style={[this.determine("blue"), {backgroundColor: "#5E8FDC"}]}
                    />
                </TouchableOpacity> 
            </View>
        );
    }

};
