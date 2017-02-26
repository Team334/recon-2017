import React, { Component } from 'react';

import Main from '../routes/Main/main';
import Welcome from '../routes/Welcome/welcome';

import CollectChoices from '../routes/Collect/Choices/choices';
import CollectTeam from '../routes/Collect/Team/team';
import CollectMatch from '../routes/Collect/Match/match';

import AnalyzeMain from '../routes/Analyze/Main/main';
import AnalyzeTeam from '../routes/Analyze/Team/team';

const routes = {
    WELCOME: {
        render: (navigator) => {
            return <Welcome navigator={navigator} />; }
    },
    MAIN: {
        render: (navigator) => {
            return <Main navigator={navigator} />;
        }
    },
    COLLECT: {
        CHOICES: {
            render: (navigator) => {
                return <CollectChoices navigator={navigator} />;
            }
        },
        TEAM: {
            render: (navigator, conn) => {
                return <CollectTeam conn={conn} navigator={navigator} />;
            }
        },
        MATCH: {
            render: (navigator, conn) => {
                return <CollectMatch conn={conn} navigator={navigator} />;
            }
        }
    },
    ANALYZE: {
        MAIN: {
            render: (navigator, conn) => {
                return <AnalyzeMain conn={conn} navigator={navigator} />;
            }
        },
        TEAM: {
            render: (navigator, conn, team) => {
                return <AnalyzeTeam conn={conn} navigator={navigator} team={team} />
            }
        } 
    }
};

export default routes;
