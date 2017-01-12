import { connect } from 'react-redux';
import { setName } from '../actions/name';

import UnderlinedTextInput from '../components/UnderlinedTextInput';

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeText: (text) => {
            dispatch(setName(text));
        }
    };
};

export default connect(null, mapDispatchToProps)(UnderlinedTextInput);
