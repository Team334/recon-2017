import {
    ADD_MATCH
} from '../actions/match';

export default function match(state=[], action) {
    switch (action.type) {
    case ADD_MATCH:
        let changed = state.splice(0);
        changed.unshift(action.match);
        return changed;

    default: 
        return state;
    }
};
