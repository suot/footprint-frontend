import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Form, Input, Label, Row, InputGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { getFirestore } from 'redux-firestore'
import { addTravel } from '../../store/actions/travelActions'
import Map from './Map';
import CityInput from './CityInput'
import DatesRange from "./DatesRange";
import StarRating from "./StarRating";


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
        const {city, startDate, endDate, rating} = this.props.travel;
        const cost = Number.parseFloat(this.state.cost.trim());
        const travelType = this.state.travelType;
        if(cost===null || cost.isNaN || travelType===null || travelType==="" || city.name===null || city.country===null || city.lat===null || city.lng===null || startDate===null || endDate===null || rating===null ){
            alert("Please complete all information");
        }else{
            const travelRecord = {
                ...this.props.travel,
                cost: cost,
                travelType: travelType
            }

            this.props.addTravel(travelRecord, this.props.auth.uid, this.props.profile.region);
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
                                                <Label className="mr-2">City</Label>
                                                <CityInput />
                                            </FormGroup>

                                            <FormGroup row className="ml-1">
                                                <Label htmlFor="time">Travel time</Label>
                                                <DatesRange/>
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
                                                <Label className="mr-2">Rating the city</Label>
                                                <StarRating />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="9" md="9">
                                            <Map/>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <Button type="button" color="primary" className="mr-2" onClick={this.addTravel}><i className="fa fa-dot-circle-o"></i> Add the record</Button>
                                    {/*<Button type="reset" color="danger"><i className="fa fa-ban"></i> Reset</Button>*/}
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
        travel: state.travel,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTravel: (travelRecord, uid, region) => dispatch(addTravel(travelRecord, uid, region))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTravel);
