import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import FootprintSummary from './FootprintSummary'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

const FootprintList = (props) => {
    return (
        <div className="animated fadeIn mt-3">
            <Row>
                <Col xs="12" md="12">
                    <Card>
                        <CardHeader>
                            <strong>Footprint list</strong>
                        </CardHeader>
                        <CardBody>
                            {
                                props.footprints && props.footprints.map(footprint => {
                                    return (
                                        <Link to={"/footprint/" + footprint.id} key={footprint.id}>
                                            <FootprintSummary footprint={footprint}/>
                                        </Link>
                                    )
                                })
                            }
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" className="mr-2" onClick={() => props.history.push('/footprint/add')}><i className="fa fa-dot-circle-o"></i> Add footprint</Button>
                            <Button type="reset" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default withRouter(FootprintList);
