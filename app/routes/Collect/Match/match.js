import React, { Component } from 'react';
import {
    Text    
} from 'react-native';

import { connect } from 'react-redux';

class CollectMatch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text> World </Text>
        ); 
    }
}

export default connect()(CollectMatch);
