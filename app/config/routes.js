import React, { Component } from 'react';

import Main from '../routes/Main/main';
import Welcome from '../routes/Welcome/welcome';

const routes = [ 
    {
        renderScene(navigator) {
            return <Welcome navigator={navigator} />;
        }
    },
    {
        renderScene(navigator) {
            return <Main navigator={navigator} />;
        }
    }
];

export default routes;
