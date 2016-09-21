import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'

const AppRoutes = (
    <Route name="app" path="/" component={App}>
        <IndexRoute offers='null' name="Dashboard" component={App}/>
    </Route>
)

export default AppRoutes
