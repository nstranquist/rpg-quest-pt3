import React from 'react';
//import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Title from './screens/Title'
import Login from './screens/Auth/Login'
import Signup from './screens/Auth/Signup'
import PrivateRoute from './utils/PrivateRoute'
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <main className="aspect">
        <audio id="title_music" src="/music/castle-in-the-sky-remix.mp3" autoPlay loop />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute path='/home' component={Home} />
          <Route path='/' component={Title} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
