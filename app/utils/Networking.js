import Config from '../config/config';

import { addMatch } from '../actions/match';
import { addTeam } from '../actions/team';

class Connection extends WebSocket {
    constructor(server, dispatch) {
        super(server);

        this.dispatch = dispatch;

        this._isUpdating = false;
        this._lastUpdate = "";
        this.update = this.update.bind(this);

        this._send = this._send.bind(this);
        this._handle = this._handle.bind(this);
        this._handleUpdate = this._handleUpdate.bind(this);

        this.onmessage = this._handle;

        this.onopen = () => {
            this.update();
        };
    }

    _send(packet) {
        if (this.readyState != this.OPEN) {
            return;
        }

        super.send(JSON.stringify(packet));
    }

    update() {
        if (this._isUpdating) return;
        this._isUpdating = true;

        this._send({
            action: "refresh",
            last_update: this._lastUpdate,
        });
    }

    submitMatch(form) {
        this._send({
            action: "submit_match",
            form
        });
    }

    submitTeam(form) {
        this._send({
            action: "submit_team",
            form
        });
    }

    requestAnalytics(team) {

    }

    _handle(raw) {
        const data = JSON.parse(raw.data);

        switch (data.action) {
        case "refresh":
            this._handleUpdate(data);
            break;
        }

        this._lastUpdate = data.date;
    }

    _handleUpdate(update) {
        update.data.forEach((u) => {
            switch (u.action) {
            case "new_match":
                this.dispatch(addMatch(u.data));
                break;
            case "new_team":
                this.dispatch(addTeam(u.data));
                break;
            }
        });

        this._isUpdating = false;
    }
}

function connect(dispatch) {
    return new Connection(Config.SERVER, dispatch);
}

export default {
    connect
};
