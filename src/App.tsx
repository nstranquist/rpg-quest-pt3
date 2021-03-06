import React from 'react';
//import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './screens/Home'
import Title from './screens/Title'
import Castle from './screens/Castle'
import Battle from './screens/Battle'
import Shop from './screens/Shop'
import Character from './screens/Character'
import Login from './screens/Auth/Login'
import Signup from './screens/Auth/Signup'
import PrivateRoute from './utils/PrivateRoute'

import { MainAspect } from './styles/App.styles'

const App: React.FC = () => {
  return (
    <Router>
      <MainAspect>
        <audio id="title_music" src="/music/castle-in-the-sky-remix.mp3" autoPlay loop />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          {/* can look into nesting private routes later */}
          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path='/battle' component={Battle} />
          <PrivateRoute path='/character' component={Character} />
          <PrivateRoute path='/shop' component={Shop} />
          <PrivateRoute path='/castle' component={Castle} />
          <Route exact path='/' component={Title} />
          <Route path='/' render={() => <Redirect to='/' />} />
        </Switch>
      </MainAspect>
    </Router>
  );
}

export default App;
