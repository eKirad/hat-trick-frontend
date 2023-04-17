import React from 'react'
// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
// import HomeView from './views/HomeView'
import CustomLayout from './components/Layout'

const App: React.FC<{}> = () => {
    // const routes = [{ component: HomeView, path: `/`, exact: true }]

    return (
        <CustomLayout />
        // <div>
        //     <Router>
        //         <Switch>
        //             {routes.map((route, i) => <Route key={i} {...route}/>)}
        //         </Switch>
        //     </Router>
        // </div>
    )
}

export default App
