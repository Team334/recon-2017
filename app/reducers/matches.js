import {
    ADD_MATCH
} from '../actions/match';

export default function match(state=[], action) {
    console.warn(JSON.stringify(state));

    switch (action.type) {
    case ADD_MATCH:
        let changed = state.splice(0);
        changed.push(action.match);

        return changed;

    default: 
        return state;
    }
};
