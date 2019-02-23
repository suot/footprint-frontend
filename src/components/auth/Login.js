import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux'
import firebase from 'firebase/app';
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/' />

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <h1 className="mb-4 text-center text-primary">Login</h1>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" id={"email"} onChange={this.updateInput} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="current-password" id={"password"} onChange={this.updateInput} />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4 submit">Login</Button>
                        <div className="red-text">
                          {
                            this.props.authError ? <p>{ this.props.authError }</p> : null
                          }
                        </div>
                      </Col>
                      <Col xs="6" className="text-right">
                        {/*<Button color="link" className="px-0">Forgot password?</Button>*/}
                        <Link to="/register">
                          <Button color="link" className="px-0">Register</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (credentials) => dispatch(signIn(credentials))
      // logIn: (credentials) =>  {
      //     firebase.auth().signInWithEmailAndPassword(
      //         credentials.email,
      //         credentials.password
      //     ).then(() => {
      //         dispatch({ type: 'LOGIN_SUCCESS' });
      //     }).catch((err) => {
      //         dispatch({ type: 'LOGIN_ERROR', err })
      //     });
      // }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default connect(null, mapDispatchToProps)(Login);
