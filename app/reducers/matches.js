import {
    ADD_MATCH
} from '../actions/match';

var i = 0;

export default function match(state=[], action) {
    switch (action.type) {
    case ADD_MATCH:
        var index = -1;
        for (var i = 0; i < state.length; i++) {
            if (state[i].team == action.match.team &&
                state[i].match == action.match.match) {
                index = i;
                break;
            }
        }

        let copy = state.slice()
        if (index == -1) {
            copy.unshift(action.match);
        } else {
            copy[index] = action.match;
        }
        
        return copy;

    default: 
        return state;
    }
};
