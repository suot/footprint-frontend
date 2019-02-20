import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';


const FootprintDetails = ({footprint}) => {
    return (
        <div className="animated fadeIn mt-3">
            <Row>
                <Col xs="12" md="12">
                    <span><strong>A footprint: </strong></span>
                    <FormGroup row className="my-0">
                        <Col xs="6">
                            <FormGroup>
                                <Label>Country</Label>
                                <Input type="text" value={footprint.country} />
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup>
                                <Label>City</Label>
                                <Input type="text" value={footprint.city} />
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup row className="my-0">
                        <Col xs="6">
                            <FormGroup>
                                <Label>Start</Label>
                                <Input type="text" value={footprint.startDate} />
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup>
                                <Label>End</Label>
                                <Input type="text" value={footprint.endDate} />
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup row className="my-0">
                        <Col xs="6">
                            <FormGroup>
                                <Label>Cost</Label>
                                <Input type="text" value={footprint.cost} />
                            </FormGroup>
                        </Col>
                        <Col xs="6">
                            <FormGroup>
                                <Label>Rating</Label>
                                <Input type="text" value={footprint.rating} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
}


export default FootprintDetails;
