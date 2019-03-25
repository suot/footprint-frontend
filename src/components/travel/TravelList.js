import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Form, Input, Label, Row, InputGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { getTravelList } from '../../store/actions/travelActions'
import Map from '../utils/Map';
import Timeline from '../utils/Timeline'


class TravelList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    deleteTravel = (e) => {
        e.preventDefault();

        //console.log(this.props.profile);
        // const {city, startDate, endDate, rating} = this.props.travel;
        // const cost = Number.parseFloat(this.state.cost.trim());
        // const travelType = this.state.travelType;
        // if(cost===null || cost.isNaN || travelType===null || travelType==="" || city.name===null || city.country===null || city.lat===null || city.lng===null || startDate===null || endDate===null || rating===null ){
        //     alert("Please complete all information");
        // }else{
        //     const travelRecord = {
        //         ...this.props.travel,
        //         cost: cost,
        //         travelType: travelType
        //     }
        //
        //     this.props.addTravel(travelRecord, this.props.auth.uid, this.props.profile.region);
        //     this.props.history.push('/');
        // }
    }


    updateInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        });

    }

    componentWillMount() {
        this.props.getTravelList();
    }


    render() {
        return (
            <div className="animated fadeIn mt-3">
                <Form>
                    <Row>
                        <Col xs="12" md="12">
                            <Card>
                                <CardHeader>
                                    <strong>Your historical travels</strong>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col xs="3" md="3">
                                            {/*<FormGroup row className="ml-1">*/}
                                                {/*<Label className="mr-2">City</Label>*/}
                                                {/*<CityInput />*/}
                                            {/*</FormGroup>*/}

                                            <FormGroup row className="ml-1">
                                                <Timeline />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="9" md="9">
                                            <Map/>
                                        </Col>
                                    </Row>
                                </CardBody>
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
        getTravelList: uid => dispatch(getTravelList(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelList);
