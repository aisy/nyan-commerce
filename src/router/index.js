import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page here
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={HomePage} />
      <Route path={"/search"} component={SearchPage} />
    </Switch>
  )
}

export default Router