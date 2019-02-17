import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

import AvatarEditor from 'react-avatar-editor';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn mt-4">
        <Row>
          <Col xs="12" md="10">
            <Card>
              <CardHeader>
                <strong>Edit your profile</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" id="username" disabled/>
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

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="text" id="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="marriage">Personal status</Label>
                  <Input type="select" name="marriage" id="marriage">
                    <option value="0">Please select</option>
                    <option value="1">Single</option>
                    <option value="2">Coupled without kid</option>
                    <option value="3">Coupled with kid</option>
                  </Input>
                </FormGroup>

                {/*<FormGroup>*/}
                  {/*<Label htmlFor="avatar">Upload avatar</Label>*/}
                  {/*<Input type="file" accept="image/*" id="avatar" placeholder="Upload your avatar" />*/}
                {/*</FormGroup>*/}

                <FormGroup>
                  <Label htmlFor="avatar">Upload avatar</Label>
                  <AvatarEditor
                      image="http://example.com/initialimage.jpg"
                      width={50}
                      height={50}
                      border={100}
                      // color={[255, 255, 255, 0.6]} // RGBA
                      scale={1.2}
                      rotate={0}
                  />

                </FormGroup>

              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary" className="mr-2"><i className="fa fa-dot-circle-o"></i> Submit</Button>
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
