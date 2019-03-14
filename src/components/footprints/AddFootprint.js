import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Form, Input, Label, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { getFirestore } from 'redux-firestore'
import { addFootprint } from '../../store/actions/footprintActions'
import Map from '../map/Map';

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
        this.props.history.push('/');
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
                                    <Row>
                                        <Col xs="3" md="3">
                                            {/*<FormGroup row className="my-0">*/}
                                                {/*<Col xs="6">*/}
                                                    {/*<FormGroup>*/}
                                                        {/*<Label htmlFor="country">Country</Label>*/}
                                                        {/*<Input type="text" id="country" onChange={this.updateInput}>                                                       </Input>*/}
                                                    {/*</FormGroup>*/}
                                                {/*</Col>*/}
                                                {/*<Col xs="6">*/}
                                                    {/*<FormGroup>*/}
                                                        {/*<Label htmlFor="city">City</Label>*/}
                                                        {/*<Input type="text" id="city" onChange={this.updateInput}>*/}
                                                            {/*<option value=""></option>*/}
                                                            {/*<option value="Busan">Busan</option>*/}
                                                        {/*</Input>*/}
                                                    {/*</FormGroup>*/}
                                                {/*</Col>*/}
                                            {/*</FormGroup>*/}

                                            <FormGroup row className="my-0">
                                                <Label htmlFor="country">Country</Label>
                                                <Input type="text" id="country" onChange={this.updateInput}>                                                       </Input>
                                            </FormGroup>

                                            <FormGroup row className="my-0">
                                                <Label htmlFor="city">City</Label>
                                                <Input type="text" id="city" onChange={this.updateInput}>                                                       </Input>
                                            </FormGroup>

                                            <FormGroup row className="my-0">
                                                <Label htmlFor="cityType">City type</Label>
                                                <Input type="select" id="cityType" onChange={this.updateInput}>
                                                    <option value=""></option>
                                                    <option value="Metropolis">Metropolis</option>
                                                    <option value="Island">Island/Sea</option>
                                                    <option value="Mountain">Mountain/Lake</option>
                                                    <option value="History">Historic sites</option>
                                                </Input>
                                            </FormGroup>

                                            <FormGroup row className="my-0">
                                                <Label htmlFor="time">Travel time</Label>
                                                <Input type="text" id="time" onChange={this.updateInput}>                                                       </Input>
                                            </FormGroup>

                                            <FormGroup row className="my-0">
                                                <Label htmlFor="cost">Cost</Label>
                                                <Input type="select" id="cost" onChange={this.updateInput}>
                                                    <option value=""></option>
                                                    <option value="3">Expensive</option>
                                                    <option value="2">Medium</option>
                                                    <option value="1">Cheap</option>
                                                </Input>
                                            </FormGroup>

                                            <FormGroup row className="my-0">
                                                <Label htmlFor="recommend">Recommend to others</Label>
                                                <Input type="select" id="recommend" onChange={this.updateInput}>
                                                    <option value=""></option>
                                                    <option value="True">Yes</option>
                                                    <option value="No">No</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col xs="9" md="9">
                                            <div>
                                                <Map/>
                                            </div>
                                        </Col>
                                    </Row>
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
        addFootprint: (footprint) => dispatch(addFootprint(footprint))
       
        // addFootprint: (footprint) => {
        //     const firestore = getFirestore();
        //     firestore.collection('footprints').add({
        //         ...footprint,
        //         userId: 55
        //     }).then(()=>{
        //         dispatch({ type: 'ADD_FOOTPRINT', footprint });
        //     }).catch((err)=>{
        //         dispatch({ type: 'ADD_FOOTPRINT_ERROR', err })
        //     })
        // }
        
        
    }
}

export default connect(null, mapDispatchToProps)(AddFootprint);
