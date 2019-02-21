import React from 'react';
import { Col, Row, Label } from 'reactstrap';


const FootprintSummary = ({footprint}) => {
    return (
        <div className="animated fadeIn mt-3">
            <Row>
                <Col xs="12" md="12">
                    <Label>Footprint: {footprint.id}</Label>                           
                </Col>
            </Row>
        </div>
    );
}


export default FootprintSummary;
