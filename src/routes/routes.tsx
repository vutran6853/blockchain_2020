import * as React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'
import Explorer from '../components/explorer/Explorer'

const routes = (
  <Switch>
    <Route path="/"  component={Explorer}></Route>
  </Switch>
)

export default routes