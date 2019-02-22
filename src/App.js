import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';
// import Notfound from './components/auth/Notfound'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


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
        if(this.props.auth.uid){
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" name="Login Page" component={Login} />
                        <Route exact path="/register" name="Register Page" component={Register} />
                        <Route path="/" name="Home" component={DefaultLayout} />
                        {/*<Route component={Notfound} />*/}
                    </Switch>
                </BrowserRouter>
            );
        }else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" name="Login Page" component={Login} />
                        <Route exact path="/register" name="Register Page" component={Register} />
                        <Redirect to='/login' />
                    </Switch>
                </BrowserRouter>
            );
        }
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

//export default App;
export default connect(mapStateToProps)(App);
