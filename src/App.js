import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom';
import Register from './containers/Auth/Registration/Registration';
import Login from './containers/Auth/Login/Login';
import LostWorld from './containers/LostWorld/LostWorld';
import Test from './containers/Auth/test/test';
import { getCurrentUser } from './utils/utils';
import { ACCESS_TOKEN } from './utils/constants/index';
import './App.module.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.loadCurrentUser();
    }

    handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);
    }

    handleLogin() {

        this.loadCurrentUser();
        this.props.history.push("/");
    }

  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/login" render={(props) => <Login onLogin={this.handleLogin} {...props}/>}/>
                <Route path="/register" component={Register}/>
                <Route path="/test" component={Test}/>
                <Route path="/" exact component={LostWorld}/>
            </Switch>
        </Layout>
    );
  }
}

export default App;
