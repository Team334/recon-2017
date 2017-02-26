import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,

        shadowColor: '#000000',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 0,
        },

        elevation: 5,

        backgroundColor: '#ebf7f9',

        borderRadius: 5,
        margin: 5,
    },
    icon: {
        position: 'absolute', 

        width: 45,
        height: 45,

        backgroundColor: '#3E75CC',

        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',

        zIndex: 1,
    },
    content: {
        backgroundColor: '#ebf7f9',
        flex: 1,

        justifyContent: 'center',

        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

        borderRadius: 5,
    },
    bar: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000000',
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 0,
        },

        elevation: 1,

        height: 18,
    },
    amount: {
        color: '#ebf7f9',
        fontSize: 15,

        left: 0,

        backgroundColor: 'transparent',
    },
    hint: {
        color: '#5E8FDC',
        textAlign: 'center',
        fontWeight: '700',
        alignSelf: 'center'
    }
});

export default class Bar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hint: false,
            pos: new Animated.Value(0),
            opacity: new Animated.Value(1),
            container: {
                paddingLeft: 45
            },
        };

        this.state.opacity.addListener(({value}) => {
            if (value != 0) return;

            const side = "padding" + (this.state.hint ? "Right" : "Left");
            this.setState({
                content: !this.state.hint ? (
                    <View style={[styles.bar, this.state.bar]}>
                        <Text style={styles.amount}>{this.props.amount}</Text>
                    </View>
                ) : (
                    <Text style={styles.hint}>{this.props.hint}</Text>
                ),
                container: {
                    [side]: 45,
                },
            });
        });

        this._toggleHint = this._toggleHint.bind(this);
    }

    _toggleHint() {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 200,
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 400,
                })
            ]),
            Animated.timing(this.state.pos, {
                toValue: !this.state.hint ? this.state.width : 0,
                duration: 500,
            })
        ]).start();

        this.setState({hint: !this.state.hint});
    }

    componentDidMount() {
        requestAnimationFrame(() => this.refs.content.measure((ox, oy, width, height, px, py) => {
            this.setState({
                width,
                bar: {
                    width: this.props.amount / this.props.full * (width - 5),
                    backgroundColor: this.props.color,
                },
            }, () => this.setState({
                content: (
                    <View style={[styles.bar, this.state.bar]}>
                            <Text style={styles.amount}>{this.props.amount}</Text>
                    </View>
                )
            }));
        }));
    }

    render() {
        return (
            <View style={[styles.container, this.state.container]}>
                <Animated.View style={[styles.icon, {left: this.state.pos}]}>
                    <TouchableOpacity onPress={this._toggleHint}>
                    {this.props.icon}
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.content, {opacity: this.state.opacity}]}>
                    <View ref="content">
                        {this.state.content}
                    </View>
                </Animated.View>
            </View>
        );
    }
}
