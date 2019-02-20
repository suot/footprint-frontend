import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';


class CreateFootprint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    createFootprint = () => {
        console.log(this.state);
    }


    render() {
        return (
            <div className="animated fadeIn mt-3">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                <strong>Create footprint</strong>
                            </CardHeader>
                            <CardBody>
                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="country">Country</Label>
                                            <Input type="select" name="country" id="country">
                                                <option value="China">China</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Korea">Korea</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Canada">Canada</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="city">City</Label>
                                            <Input type="select" name="city" id="city">
                                                <option value="Busan">Busan</option>
                                                <option value="Seoul">Seoul</option>
                                                <option value="Kyoto">Kyoto</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="startDate">Start</Label>
                                            <Input type="text" id="startDate" placeholder="Start date" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="endDate">End</Label>
                                            <Input type="text" id="endDate" placeholder="End date" />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="cost">Cost</Label>
                                            <Input type="text" id="cost" placeholder="Cost per person" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="rating">Rating</Label>
                                            <Input type="text" id="rating" placeholder="Rating the city" />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" color="primary" className="mr-2" onClick={this.createFootprint}><i className="fa fa-dot-circle-o"></i> Create</Button>
                                <Button type="reset" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CreateFootprint;
