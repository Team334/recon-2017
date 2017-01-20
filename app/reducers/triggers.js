import {
    TRIGGER
} from '../actions/trigger';

export default function trigger(state = "", action) {
    switch (action.type) {
    case TRIGGER:
        return action.trigger;
        return  

    default:
        return state;
    }
}
