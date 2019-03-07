import React from 'react';
import { Col, Row, Label } from 'reactstrap';
import moment from 'moment';

const FootprintSummary = ({footprint}) => {
    return (
        <div className="animated fadeIn mt-3">
            <Row>
                <Col xs="12" md="12">
                    <Label>Footprint: { footprint.id} </Label>
                    <p>Posted by { footprint.userId }, { moment(footprint.createdAt.toDate()).calendar() }</p>
                </Col>
            </Row>
        </div>
    );
}


export default FootprintSummary;
