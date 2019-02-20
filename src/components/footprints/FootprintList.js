import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import FootprintDetails from './FootprintDetails'

const FootprintList = ({footprints}) => {
    // addFootprint = () => {
    //     // console.log(this.state);
    // }

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
                                footprints && footprints.map(footprint => {
                                    return(
                                        <FootprintDetails footprint={footprint} key={footprint.id} />
                                    )
                                })
                            }
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" color="primary" className="mr-2"><i className="fa fa-dot-circle-o"></i> Add footprint</Button>
                            <Button type="reset" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FootprintList;
