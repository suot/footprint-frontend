import React from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const FootprintDetails = ({footprint}) => {
    if(footprint){
        return(
                <div className="animated fadeIn mt-3">
                    <Row>
                        <Col xs="12" md="12">
                            <span><strong>A footprint: </strong></span>
                            <FormGroup row className="my-0">
                                <Col xs="6">
                                    <FormGroup>
                                        <Label>Country</Label>
                                        <Input type="text" value={footprint.country} readOnly />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label>City</Label>
                                        <Input type="text" value={footprint.city} readOnly />
                                    </FormGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup row className="my-0">
                                <Col xs="6">
                                    <FormGroup>
                                        <Label>Start</Label>
                                        <Input type="text" value={footprint.startDate} readOnly />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label>End</Label>
                                        <Input type="text" value={footprint.endDate} readOnly />
                                    </FormGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup row className="my-0">
                                <Col xs="6">
                                    <FormGroup>
                                        <Label>Cost</Label>
                                        <Input type="text" value={footprint.cost} readOnly />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label>Rating</Label>
                                        <Input type="text" value={footprint.rating} readOnly />
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
        )
    }else{
        return (
            <div className={"container center"}>
                <p>Loading project...</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const footprints = state.firestore.data.footprints;
    const footprint = footprints ? footprints[id] : null
    return {
        footprint: footprint,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'footprints'}
    ])
)(FootprintDetails);
