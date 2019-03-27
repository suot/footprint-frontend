import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Form, Input, Label, Row, InputGroup } from 'reactstrap';
import { connect } from 'react-redux'
//import { getFirestore } from 'redux-firestore'
import { addTravel } from '../../store/actions/travelActions'
import Map_AddTravel from '../utils/Map_AddTravel';
import CityInput from '../utils/CityInput'
import DatesRange from "../utils/DatesRange";
import StarRating from "../utils/StarRating";


class AddTravel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cost: null,
            travelType: null,
        };
    }

    addTravel = (e) => {
        e.preventDefault();

        //console.log(this.props.profile);
        const {city, startDate, endDate, rating, footprints} = this.props.travel;

        let cost = this.state.cost;
        const travelType = this.state.travelType;

        if(city.name===null || city.country===null || city.latlng.lat===null || city.latlng.lng===null){
            alert("Please input a city");
        }else if(startDate===null || endDate===null){
            alert("Please select a travel temporal");
        }else if(cost===null || Number.parseFloat(cost.trim()).isNaN){
            alert("Please input a valid cost number");
        }else if(travelType===null || travelType===""){
            alert("Please select a travel type");
        }else if(rating===null || rating===0){
            alert("The minimum rating value should be 1");
        }else if(footprints.length === 0){
            alert("Please click on the map to add footprints");
        }else{
            const travelRecord = {
                ...this.props.travel,
                cost: cost,
                travelType: travelType
            }
            this.props.addTravel(travelRecord, this.props.auth.uid);
            this.props.history.push('/');
        }
    }


    updateInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
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
                                    <strong>Record a travel</strong>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col xs="3" md="3">
                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="time">Travel time</Label>
                                                <DatesRange/>
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label className="mr-2">City</Label>
                                                <CityInput />
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="cost">Cost in CAD</Label>
                                                <Input type="text" id="cost" onChange={this.updateInput}/>
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="travelType">Travel type</Label>
                                                <Input type="select" id="travelType" onChange={this.updateInput}>
                                                    <option value=""></option>
                                                    <option value="Metropolis">Metropolis</option>
                                                    <option value="Island">Island/Sea</option>
                                                    <option value="Mountain">Mountain/Lake</option>
                                                    <option value="History">Historic sites</option>
                                                </Input>
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label className="mr-4">Rate the city</Label>
                                                <StarRating />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="9" md="9">
                                            <Map_AddTravel/>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <Button type="button" color="primary" className="mr-2" onClick={this.addTravel}><i className="fa fa-dot-circle-o"></i> Add the record</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        travel: state.travel.newTravel,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTravel: (travelRecord, uid) => dispatch(addTravel(travelRecord, uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTravel);
