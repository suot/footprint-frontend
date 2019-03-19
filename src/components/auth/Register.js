import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { signUp } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/travel/add' />

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.addUser}>
                    <h1 className="mb-4 text-center text-primary">Register</h1>                    
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" id="email" onChange={this.updateInput} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="password" id="password" onChange={this.updateInput} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input className="mr-1" type="text" placeholder="First Name" autoComplete="first name" id="firstName" name="firstName" onChange={this.updateInput} />
                      <Input type="text" placeholder="Last Name" autoComplete="last name" id="lastName" name="lastName" onChange={this.updateInput} />
                    </InputGroup>

                    <Row>
                        <Button color="primary" block type="submit">Create Account</Button>
                        <div>
                          { authError ? <p>{ authError }</p> : null }
                        </div>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><i className="fa fa-facebook-square"></i><span> facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><i className="fa fa-twitter-square"></i><span> twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
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
    // status: state.auth.status,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
