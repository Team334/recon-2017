import {
    ADD_TEAM
} from '../actions/team';

export default function team(state=[], action) {
    switch (action.type) {
    case ADD_TEAM:
        var index = -1;
        for (var i = 0; i < state.length; i++) {
            if (state[i].number == action.team.number) {
                index = i;
                break;
            }
        }

        let copy = state.slice();
        if (index == -1) {
            copy.unshift(action.team);
        } else {
            copy[index] = action.team;
        }

        return copy;

    default:
        return state;
    }
};
