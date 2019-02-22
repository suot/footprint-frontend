import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';
import Notfound from './components/auth/Notfound'
import { connect } from 'react-redux'


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
    loader: () => import('./components/defaultLayout/DefaultLayout'),
    loading
});

// Pages
const Login = Loadable({
    loader: () => import('./components/auth/Login'),
    loading
});

const Register = Loadable({
    loader: () => import('./components/auth/Register'),
    loading
});


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" name="Login Page" component={Login} />
                    <Route exact path="/register" name="Register Page" component={Register} />
                    <Route path="/" name="Home" component={DefaultLayout} />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
        );
    }
}



const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

//export default App;
export default connect(mapStateToProps)(App);
