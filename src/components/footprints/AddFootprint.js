import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Form, Input, Label, Row } from 'reactstrap';
import { addFootprint } from '../../store/actions/footprintActions'
import { connect } from 'react-redux'


import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'


class AddFootprint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            footprint:{
                country: "",
                city: "",
                startDate: "",
                endDate: "",
                cost: 0,
                rating: 0,
            }
        };
    }

    addFootprintSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addFootprint(this.state.footprint);
    }


    updateInput = (e) => {
        this.setState({
            footprint:{
                ...this.state.footprint,
                [e.target.id]: e.target.value
            },
        });

    }


    render() {
        return (
            <div className="animated fadeIn mt-3">
                <Form onSubmit={this.addFootprintSubmit}>
                    <Row>
                        <Col xs="12" md="12">
                            <Card>
                                <CardHeader>
                                    <strong>Add footprint</strong>
                                </CardHeader>
                                <CardBody>
                                    <FormGroup row className="my-0">
                                        <Col xs="6">
                                            <FormGroup>
                                                <Label htmlFor="country">Country</Label>
                                                <Input type="select" id="country" onChange={this.updateInput}>
                                                    <option value=""></option>
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
                                                <Input type="select" id="city" onChange={this.updateInput}>
                                                    <option value=""></option>
                                                    <option value="Busan">Busan</option>
                                                    <option value="Lahore">Lahore</option>
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
                                                <Input type="text" id="startDate" placeholder="Start date" onChange={this.updateInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="6">
                                            <FormGroup>
                                                <Label htmlFor="endDate">End</Label>
                                                <Input type="text" id="endDate" placeholder="End date" onChange={this.updateInput} />
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row className="my-0">
                                        <Col xs="6">
                                            <FormGroup>
                                                <Label htmlFor="cost">Cost</Label>
                                                <Input type="text" id="cost" placeholder="Cost per person" onChange={this.updateInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="6">
                                            <FormGroup>
                                                <Label htmlFor="rating">Rating</Label>
                                                <Input type="text" id="rating" placeholder="Rating the city" onChange={this.updateInput} />
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" color="primary" className="mr-2"><i className="fa fa-dot-circle-o"></i> Add</Button>
                                    <Button type="reset" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addFootprint: (footprint) => dispatch(addFootprint(footprint))
        // addFootprint: (footprint) => dispatch({ type: 'ADD_FOOTPRINT', footprint})
        addFootprint: (footprint) => {
            const firestore = getFirestore();
            firestore.collection('footprints').add({
                ...footprint,
                userId: 55
            }).then(()=>{
                dispatch({ type: 'ADD_FOOTPRINT', footprint });
            }).catch((err)=>{
                dispatch({ type: 'ADD_FOOTPRINT_ERROR', err })
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AddFootprint);
