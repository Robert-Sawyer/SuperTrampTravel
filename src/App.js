import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom';
import Register from './containers/Auth/Registration/Registration';
import Login from './containers/Auth/Login/Login';
import LostWorld from './containers/LostWorld/LostWorld';
import './App.module.css';

class App extends Component {

  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/" exact component={LostWorld}/>
            </Switch>
        </Layout>
    );
  }
}

export default App;
