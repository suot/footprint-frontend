import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Form, Input, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { getCityList } from '../../store/actions/warehouseActions'
import MapCityList from '../utils/map/Map_CityList';
import TravelTimelineCityList from "../utils/timeline/TravelTimeline_CityList";


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
    };


    getCityList = () => {
        this.props.getCityList(this.state);
    };

    render() {
        if(this.props.cityList===null) {
            return (
                <div className="animated fadeIn mt-3">
                    <Form>
                        <Row>
                            <Col xs="12" md="12">
                                <Card>
                                    <CardHeader>
                                        <Row>
                                            <Col xs="1" md="1" className="mt-2">List the top</Col>
                                            <Col xs="1" md="1">
                                                <Input type="select" id="number" onChange={this.updateInput}>
                                                    <option value="" />
                                                    <option value="3">3</option>
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>
                                                </Input>
                                            </Col>
                                            <Col xs="2" md="2">
                                                <Input type="select" id="type" onChange={this.updateInput}>
                                                    <option value="" />
                                                    <option value="metropolis">Metropolises</option>
                                                    <option value="sea">Coastal cities</option>
                                                    <option value="mountain">Mountainous cities</option>
                                                    <option value="history">Historic cities</option>
                                                </Input>
                                            </Col>
                                            <Col xs="2" md="2">
                                                <Input type="select" id="time" onChange={this.updateInput}>
                                                    <option value="" />
                                                    <option value="2018">in 2018</option>
                                                    <option value="2019">in 2019</option>
                                                </Input>
                                            </Col>
                                            <Col xs="1" md="1" className="mt-2">ranking by</Col>
                                            <Col xs="2" md="2">
                                                <Input type="select" id="pattern" onChange={this.updateInput}>
                                                    <option value=""/>
                                                    <option value="ratings">average rating</option>
                                                    <option value="times">visited times</option>
                                                </Input>
                                            </Col>
                                            <Col xs="2" md="2">
                                                <Button type="button" color="primary" className="mr-2" onClick={this.getCityList}><i className="fa fa-dot-circle-o"/> Query</Button>
                                            </Col>
                                        </Row>
                                    </CardHeader>
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
                                        <Row>
                                            <Col xs="1" md="1" className="mt-2">List the top</Col>
                                            <Col xs="1" md="1">
                                                <Input type="select" id="number" onChange={this.updateInput}>
                                                    <option value=""/>
                                                    <option value="3">3</option>
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>
                                                </Input>
                                            </Col>
                                            <Col xs="2" md="2">
                                                <Input type="select" id="type" onChange={this.updateInput}>
                                                    <option value=""/>
                                                    <option value="metropolis">Metropolises</option>
                                                    <option value="sea">Coastal cities</option>
                                                    <option value="mountain">Mountainous cities</option>
                                                    <option value="history">Historic cities</option>
                                                </Input>
                                            </Col>
                                            <Col xs="2" md="2">
                                                <Input type="select" id="time" onChange={this.updateInput}>
                                                    <option value=""/>
                                                    <option value="2018">in 2018</option>
                                                    <option value="2019">in 2019</option>
                                                </Input>
                                            </Col>
                                            <Col xs="1" md="1" className="mt-2">ranking by</Col>
                                            <Col xs="2" md="2">
                                                <Input type="select" id="pattern" onChange={this.updateInput}>
                                                    <option value=""/>
                                                    <option value="ratings">average rating</option>
                                                    <option value="times">visited times</option>
                                                </Input>
                                            </Col>
                                            <Col xs="2" md="2">
                                                <Button type="button" color="primary" className="mr-2" onClick={this.getCityList}><i className="fa fa-dot-circle-o"/> Query</Button>
                                            </Col>
                                        </Row>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col xs="3" md="3">
                                                <FormGroup row className="ml-1">
                                                    <TravelTimelineCityList />
                                                </FormGroup>
                                            </Col>
                                            <Col xs="9" md="9">
                                                <MapCityList/>
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
        cityList: state.warehouse.cityList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCityList: (query) => dispatch(getCityList(query))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
