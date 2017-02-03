import {
    ADD_TEAM
} from '../actions/team';

export default function team(state=[], action) {
    switch (action.type) {
    case ADD_TEAM:
        for (var i = 0; i < state.length; i++) {
            if (state[i].number == action.team.number) return state;
        }

        let changed = state.splice(0);
        changed.push(action.team);
        return changed;

    default:
        return state;
    }
};
