import React from 'react';
import { Route } from 'react-router';
import Show from '../containers/Show';
import HelloWorld from '../components/chapter01/Session01';
import Timer from '../components/chapter03/Timer';
import SetState from '../components/chapter03/SetState';
import SetStateCtrl from '../components/chapter03/SetStateCtrl';
import Counter from '../containers/Counter';
import Others from './Others';
import ListIndex from '../containers/List';

export default () => {
    let MyRouter = <HelloWorld />;
    return (
        <React.Fragment>
            <Show>
                <Route exact path="/" component={() => MyRouter} />
                <Route exact path="/01-01-01" component={HelloWorld} />
                <Route exact path="/03-01-01" component={Timer} />
                <Route exact path="/03-01-02" component={SetState} />
                <Route exact path="/03-01-03" component={SetStateCtrl} />
                <Route exact path="/03-01-04" component={Counter} />
                <Route exact path="/06-01-01" component={ListIndex} />
                <Route exact path="*" component={Others} />
            </Show>
        </React.Fragment>
    )
};