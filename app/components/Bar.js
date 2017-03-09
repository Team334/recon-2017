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

        zIndex: 1,
    },
    content: {
        backgroundColor: '#ebf7f9',
        flex: 1,

        justifyContent: 'center',

        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

        borderRadius: 5,

        backgroundColor: 'transparent',
    },
    bar: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000000',
        shadowRadius: 1,
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
        fontWeight: '600',

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

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex({r, g, b}) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function tint(color) {
    var rgb = hexToRGB(color);
    for (let i of ['r', 'g', 'b']) {
        rgb[i] = rgb[i] + parseInt((255 - rgb[i]) * 0.96);
    }

    return rgbToHex(rgb);
}

export default class Bar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hint: false,
            pos: new Animated.Value(0),
            opacity: new Animated.Value(1),
            displayHint: new Animated.Value(0),
            length: new Animated.Value(0),
            container: {
                paddingLeft: 45
            },
            bgColor: tint(this.props.color),
        };

        this.state.opacity.addListener(({value}) => {
            if (value != 0) return;

            const side = "padding" + (this.state.hint ? "Right" : "Left");
            this.setState({
                content: !this.state.hint ? (
                    <Animated.View style={[styles.bar, {backgroundColor: this.props.color, width: this.state.length}]}>
                        <Animated.View style={{opacity: this.state.displayHint}}>
                            <Text style={styles.amount}>{this.props.amount}</Text>
                        </Animated.View>
                    </Animated.View>
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
                content: (
                    <Animated.View style={[styles.bar, {backgroundColor: this.props.color, width: this.state.length}]}>
                        <Animated.View style={{opacity: this.state.displayHint}}>
                            <Text style={styles.amount}>{this.props.amount}</Text>
                        </Animated.View>
                    </Animated.View>
                )
            }, () => Animated.timing(this.state.length, {
                toValue: this.props.amount / this.props.full * (width - 5),
                duration: 1000,
            }).start(() => Animated.timing(this.state.displayHint, {
                toValue: 1,
                duration: 300,
            }).start()));
        }));
    }

    render() {
        return (
            <View style={[styles.container, this.state.container, {backgroundColor: this.state.bgColor}]}>
                <Animated.View style={[styles.icon, {left: this.state.pos}]}>
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={this._toggleHint}>
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
