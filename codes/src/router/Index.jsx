import React from 'react';
import { Route } from 'react-router-dom';
import Show from '../components/Show';
import HelloWorld from '../components/chapter01/Session01';


export default ({path}) => <React.Fragment>
    <Show path={path}>
        <Route exact path="/" component={() => <HelloWorld />} />
        <Route exact path="/01" component={HelloWorld} />
    </Show>
</React.Fragment>;