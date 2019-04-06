import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Form, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { getTravelList } from '../../store/actions/travelActions'
import MapTravelList from '../utils/map/Map_TravelList';
import TravelTimeline from '../utils/timeline/TravelTimeline_TravelList'


class TravelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travelList: null
        };
    }

    //get travel list before rendering the component
    componentDidMount() {
        this.props.getTravelList(this.props.auth.uid);
    }

    render() {
        if(this.props.travelList===null) {
            return (
                <div className="animated fadeIn pt-1 text-center">Loading the travel list...</div>
            );
        }else {
            return (
                <div className="animated fadeIn mt-3">
                    <Form>
                        <Row>
                            <Col xs="12" md="12">
                                <Card>
                                    <CardHeader>
                                        <i className="icon-map"/><strong>Your travel records and footprints</strong>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col xs="3" md="3">
                                                <FormGroup row className="ml-1">
                                                    <TravelTimeline />
                                                </FormGroup>
                                            </Col>
                                            <Col xs="9" md="9">
                                                <MapTravelList/>
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
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        travelList: state.travel.travelList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTravelList: uid => dispatch(getTravelList(uid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelList);
