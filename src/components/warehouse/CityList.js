import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Form, Input, Label, Row, InputGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { getCityList } from '../../store/actions/warehouseActions'
import Map_CityList from '../utils/Map_CityList';
import TravelTimeline_CityList from "../utils/TravelTimeline_CityList";


class CityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //cityList: null
            number: "",
            type: "",
            time: "",
            pattern: ""
        };
    }


    updateInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        });

    }


    getCityList = () => {
        this.props.getCityList(this.state);
    }


    render() {
        if(this.props.cityList===null) {
            return (
                <div className="animated fadeIn mt-3">
                    <Form>
                        <Row>
                            <Col xs="12" md="12">
                                <Card>
                                    <CardHeader>
                                        <i className="icon-badge"></i><strong>List the top cities to your favor</strong>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col xs="2" md="2">
                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="number">Number</Label>
                                                    <Input type="select" id="number" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="3">3</option>
                                                        <option value="5">5</option>
                                                        <option value="10">10</option>
                                                    </Input>
                                                </FormGroup>

                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="type">Type</Label>
                                                    <Input type="select" id="type" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="metropolis">Metropolis</option>
                                                        <option value="sea">Coastal city</option>
                                                        <option value="mountain">Mountainous city</option>
                                                        <option value="history">Historic city</option>
                                                    </Input>
                                                </FormGroup>

                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="time">Time</Label>
                                                    <Input type="select" id="time" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                    </Input>
                                                </FormGroup>

                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="pattern">Ranking by</Label>
                                                    <Input type="select" id="pattern" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="ratings">Average ratings</option>
                                                        <option value="times">Visited times</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <Button type="button" color="primary" className="mr-2" onClick={this.getCityList}><i className="fa fa-dot-circle-o"></i> Query</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                </div>
            );
        }else {
            return (
                <div className="animated fadeIn mt-3">
                    <Form>
                        <Row>
                            <Col xs="12" md="12">
                                <Card>
                                    <CardHeader>
                                        <i className="icon-badge"></i><strong>List the top cities to your favor</strong>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col xs="2" md="2">
                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="number">Number</Label>
                                                    <Input type="select" id="number" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="3">3</option>
                                                        <option value="5">5</option>
                                                        <option value="10">10</option>
                                                    </Input>
                                                </FormGroup>

                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="type">Type</Label>
                                                    <Input type="select" id="type" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="metropolis">Metropolis</option>
                                                        <option value="sea">Coastal city</option>
                                                        <option value="mountain">Mountainous city</option>
                                                        <option value="history">Historic city</option>
                                                    </Input>
                                                </FormGroup>

                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="time">Time</Label>
                                                    <Input type="select" id="time" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                    </Input>
                                                </FormGroup>

                                                <FormGroup row className="ml-1">
                                                    <Label htmlFor="pattern">Ranking by</Label>
                                                    <Input type="select" id="pattern" onChange={this.updateInput}>
                                                        <option value=""></option>
                                                        <option value="ratings">Average ratings</option>
                                                        <option value="times">Visited times</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="3" md="3">
                                                <FormGroup row className="ml-1">
                                                    <TravelTimeline_CityList />
                                                </FormGroup>
                                            </Col>
                                            <Col xs="7" md="7">
                                                <Map_CityList/>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <Button type="button" color="primary" className="mr-2" onClick={this.getCityList}><i className="fa fa-dot-circle-o"></i> Query</Button>
                                    </CardFooter>
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
        cityList: state.warehouse.cityList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCityList: (query) => dispatch(getCityList(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
