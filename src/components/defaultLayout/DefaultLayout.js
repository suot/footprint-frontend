import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FormGroup, Input, Label, Row} from 'reactstrap';
import navigation from '../../_nav';  // sidebar nav config
import routes from '../../routes';  // routes config
import {AppFooter, AppHeader, AppSidebar, AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarMinimizer, AppSidebarNav} from '@coreui/react';
import {connect} from "react-redux";
import {changeServer} from "../../store/actions/travelActions";


const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    signOut(e) {
        e.preventDefault()
        // this.props.history.push('/login')
    }

    //state.firebase.auth is loaded when redirecting to this page, while state.firebase.profile needs seconds to be synchronized from firebase DB.
    //When it is loaded the props will change and then set the state to render the component again.
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.profile.isEmpty && (!this.props.profile.isEmpty)){
            this.setState({
                profile: this.props.profile
            });

            //change DB Server
            this.props.changeServer(this.props.profile.region);
        }
    }

    render() {
        if(this.props.profile.isEmpty) {
            return (
                <div className="animated fadeIn pt-1 text-center">Loading profile...</div>
            );
        }else{
            return (
                <div className="app">
                    <AppHeader fixed>
                        <Suspense fallback={this.loading()}>
                            <DefaultHeader onLogout={e=>this.signOut(e)}/>
                        </Suspense>
                    </AppHeader>
                    <div className="app-body">
                        <AppSidebar fixed display="lg">
                            <AppSidebarHeader />
                            <AppSidebarForm />
                            <Suspense>
                                <AppSidebarNav navConfig={navigation} {...this.props} />
                            </Suspense>
                            <AppSidebarFooter />
                            <AppSidebarMinimizer />
                        </AppSidebar>
                        <main className="main">
                            <Container fluid>
                                <Suspense fallback={this.loading()}>
                                    <Switch>
                                        {routes.map((route, idx) => {
                                            return route.component ? (
                                                <Route
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    // component = {route.component}
                                                    render={props => (
                                                        <route.component {...props} />
                                                    )}
                                                />
                                            ) : (null);
                                        })}
                                    </Switch>
                                </Suspense>
                            </Container>
                        </main>
                    </div>
                    <AppFooter>
                        <Suspense fallback={this.loading()}>
                            <DefaultFooter />
                        </Suspense>
                    </AppFooter>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeServer: (region) => dispatch(changeServer(region))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
