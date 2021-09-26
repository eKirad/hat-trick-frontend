import React  from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';

const App: React.FC<{}> = () => {
    const routes =  [
        { component: HomeView, path: `/`, exact: true }
    ];

    return (
        <div>
            <Router>
                <Switch>
                    {routes.map((route, i) => <Route key={i} {...route}/>)}
                </Switch>
            </Router>
        </div>
    );
}

export default App

