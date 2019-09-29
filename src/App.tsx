// React imports
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// View imports
import HomeView from './views/HomeView';

interface IProps { };

interface IState {
    title: string,
    routes: Array<object>
};

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    
    state: IState = {
        title: `Hat-trick`,
        routes: [
            { component: HomeView, path: `/`, exact: true }
        ]
    };

    componentDidMount(): any {
        document.title = this.state.title;
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => <Route key={i} {...route}/>)}
                    </Switch>
                </Router>
            </div>
        );
    }
};

