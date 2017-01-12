import {
    SET_NAME
} from '../actions/name';

export default function user(state = "", action) {
    switch (action.type) {
    case SET_NAME:
        return action.name; 

    default:
        return state;
    }
};
