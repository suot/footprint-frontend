import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Form, Input, Label, Row, InputGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { getFirestore } from 'redux-firestore'
import { addTravel } from '../../store/actions/travelActions'
import Map from '../map/Map';
import CityInput from './CityInput'


class AddTravel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            travel:{
                city: {
                    name:'',
                    country:'',
                    lat:'',
                    lng:''
                },
                startDate:'',
                endDate:'',
                cost: 0,
                rating: 0,
            }
        };
    }

    addTravelSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addTravel(this.state.travel);
        this.props.history.push('/');
    }


    updateInput = (e) => {
        this.setState({
            travel:{
                ...this.state.travel,
                [e.target.id]: e.target.value
            },
        });

    }

    render() {
        return (
            <div className="animated fadeIn mt-3">
                <Form>
                    <Row>
                        <Col xs="12" md="12">
                            <Card>
                                <CardHeader>
                                    <strong>Add a new travel record</strong>
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


                                            <FormGroup row className="ml-1">
                                                <Label className="mr-2">City</Label>
                                                <CityInput />
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="time">Travel time</Label>
                                                <Input type="text" id="time" onChange={this.updateInput}>                                                       </Input>
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="cost">Cost</Label>
                                                <Input type="text" id="cost" onChange={this.updateInput}/>
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="cityType">Travel type</Label>
                                                <Input type="select" id="cityType" onChange={this.updateInput}>
                                                    <option value=""></option>
                                                    <option value="Metropolis">Metropolis</option>
                                                    <option value="Island">Island/Sea</option>
                                                    <option value="Mountain">Mountain/Lake</option>
                                                    <option value="History">Historic sites</option>
                                                </Input>
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="recommend">Rating</Label>
                                                <Input type="select" id="recommend" onChange={this.updateInput}>
                                                    <option value=""></option>
                                                    <option value="True">Yes</option>
                                                    <option value="No">No</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col xs="9" md="9">
                                            <Map/>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <Button type="button" color="primary" className="mr-2" onClick={this.addTravelSubmit}><i className="fa fa-dot-circle-o"></i> Add</Button>
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
        addTravel: (travel) => dispatch(addTravel(travel))
       
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

export default connect(null, mapDispatchToProps)(AddTravel);
