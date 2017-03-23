import SocketIOClient from 'socket.io-client';

import Config from '../config/config';

import { addMatch } from '../actions/match';
import { addTeam } from '../actions/team';

var socket;

function init(dispatch) {
    socket = SocketIOClient(Config.SERVER);

    socket.on('connect', () => {
        refresh();
    });

    socket.on('reconnect', () => {
        refresh();
    });

    socket.on('submit_match', (match) => {
        dispatch(addMatch(JSON.parse(match)));
    });

    socket.on('submit_team', (team) => {
        dispatch(addTeam(JSON.parse(team)));
    });
}

function submitMatch(match) {
    if (!socket) return;

    socket.emit('submit_match', JSON.stringify(match));
}

function submitTeam(team) {
    if (!socket) return;

    socket.emit('submit_team', JSON.stringify(team));
}

function refresh() {
    if (!socket) return;

    socket.emit('request_update', '0');
}

export default {
    init,
    submitTeam,
    submitMatch
};
