import React from 'react';
import { Route } from 'react-router-dom';
import Show from '../components/Show';
import HelloWorld from '../components/chapter01/Session01';
import Timer from '../components/chapter02/Timer';
import SetState from '../components/chapter02/SetState';
import SetStateCtrl from '../components/chapter02/SetStateCtrl';
import Counter from '../containers/Counter';

export default ({ path }) => {
    let MyRouter = <HelloWorld />;
    switch (path) {
        case '/01-01-01':
            MyRouter = <HelloWorld />;
            break;
        case '/02-01-01':
            MyRouter = <Timer />;
            break;
        case '/02-01-02':
            MyRouter = <SetState />;
            break;
        case '/02-01-03':
            MyRouter = <SetStateCtrl />;
            break;
        case '/02-01-04':
            MyRouter = <Counter />
            break;
        default:
            MyRouter = <HelloWorld />;
    }
    return (
        <React.Fragment>
            <Show path={path}>
                <Route exact path="/" component={() => MyRouter} />
                <Route exact path="/01-01-01" component={HelloWorld} />
                <Route exact path="/02-01-01" component={Timer} />
                <Route exact path="/02-01-02" component={SetState} />
                <Route exact path="/02-01-03" component={SetStateCtrl} />
            </Show>
        </React.Fragment>
    )
};