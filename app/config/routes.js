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
            render: (navigator) => {
                return <CollectTeam navigator={navigator} />;
            }
        },
        MATCH: {
            render: (navigator) => {
                return <CollectMatch navigator={navigator} />;
            }
        }
    },
    ANALYZE: {
        MAIN: {
            render: (navigator) => {
                return <AnalyzeMain navigator={navigator} />;
            }
        },
        TEAM: {
            render: (navigator, team) => {
                return <AnalyzeTeam navigator={navigator} team={team} />
            }
        } 
    }
};

export default routes;
