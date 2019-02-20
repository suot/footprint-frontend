import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

import MyAvatarEditor from './MyAvatarEditor';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      profile: {
        avatar: null,
      }
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }


  transmitAvatar = (dataURL) => {
      this.setState({
          ...this.state,
          profile: {
              avatar: dataURL,
          }
      });
  }

  submitProfile = () => {
    console.log(this.state.profile);
  }


  render() {
    return (
      <div className="animated fadeIn mt-3">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Edit your profile</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row className="my-0">
                  <Col xs="2">
                    <MyAvatarEditor transmitAvatar={this.transmitAvatar}/>
                  </Col>
                  <Col xs="10">
                    <FormGroup row className="my-0">
                      <Col xs="12">
                        <FormGroup>
                          <Label htmlFor="email">Email</Label>
                          <Input type="text" id="email" disabled/>
                        </FormGroup>
                      </Col>
                    </FormGroup>

                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="firstName">First name</Label>
                          <Input type="text" id="firstName" placeholder="Enter your first name" />
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="secondName">Second name</Label>
                          <Input type="text" id="secondName" placeholder="Enter your second name" />
                        </FormGroup>
                      </Col>
                    </FormGroup>

                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="gender">Gender</Label>
                          <Input type="select" name="gender" id="gender">
                            <option value="0">Please select</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="marriage">Personal status</Label>
                          <Input type="select" name="marriage" id="marriage">
                            <option value="0">Please select</option>
                            <option value="1">Single</option>
                            <option value="2">Coupled without kid</option>
                            <option value="3">Coupled with kid</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary" className="mr-2" onClick={this.submitProfile}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
