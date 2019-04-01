import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Spinner } from 'reactstrap';
import { connect } from 'react-redux'
import { addSampleDataToSourceDB, deleteSampleDataFromSourceDB, addDataFromSourceDBToWarehouse, deleteDataFromWarehouse} from '../../store/actions/warehouseActions'


class SynchronizeWarehouse extends Component {

    addSampleDataToSourceDB = (e) => {
        e.preventDefault();
        this.props.addSampleDataToSourceDB(100);
    }

    deleteSampleDataFromSourceDB = (e) => {
        e.preventDefault();
        this.props.deleteSampleDataFromSourceDB();
    }

    addDataFromSourceDBToWarehouse = (e) => {
        e.preventDefault();
        this.props.addDataFromSourceDBToWarehouse();
    }

    deleteDataFromWarehouse = (e) => {
        e.preventDefault();
        this.props.deleteDataFromWarehouse();
    }


    render() {
        return (
            <div className="animated fadeIn mt-3">
                <Card>
                    <CardHeader>
                        <i className="cui-cog"></i><strong>Warehouse synchronization</strong>
                    </CardHeader>
                    <CardBody>
                        <Row className="mt-2">
                            <Col xs="3" md="3">
                                <span>Add sample data to source db</span>
                            </Col>
                            <Col xs="2" md="2">
                                <Button type="button" size="sm" color="primary" onClick={this.addSampleDataToSourceDB}><Spinner color="danger" size="sm" className="mr-2" hidden={this.props.completion_sdb_add}/>Add</Button>
                            </Col>
                            <Col xs="3" md="3">
                                <span>Delete sample data from source db</span>
                            </Col>
                            <Col xs="2" md="2">
                                <Button type="button" size="sm" color="warning" onClick={this.deleteSampleDataFromSourceDB}><Spinner color="danger" size="sm" className="mr-2" hidden={this.props.completion_sdb_delete}/>Delete</Button>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xs="3" md="3">
                                <span>Synchronize data to warehouse</span>
                            </Col>
                            <Col xs="2" md="2">
                                <Button type="button" size="sm" color="primary" onClick={this.addDataFromSourceDBToWarehouse}><Spinner color="danger" size="sm" className="mr-2" hidden={this.props.completion_warehouse_add}/>Add</Button>
                            </Col>
                            <Col xs="3" md="3">
                                <span>Delete sample data from warehouse</span>
                            </Col>
                            <Col xs="2" md="2">
                                <Button type="button" size="sm" color="warning" onClick={this.deleteDataFromWarehouse}><Spinner color="danger" size="sm" className="mr-2" hidden={this.props.completion_warehouse_delete}/>Delete</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        completion_sdb_add: state.warehouse.completion_sdb_add,
        completion_sdb_delete: state.warehouse.completion_sdb_delete,
        completion_warehouse_add: state.warehouse.completion_warehouse_add,
        completion_warehouse_delete: state.warehouse.completion_warehouse_delete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSampleDataToSourceDB: (amount) => dispatch(addSampleDataToSourceDB(amount)),
        deleteSampleDataFromSourceDB: () => dispatch(deleteSampleDataFromSourceDB()),
        addDataFromSourceDBToWarehouse: () => dispatch(addDataFromSourceDBToWarehouse()),
        deleteDataFromWarehouse: () => dispatch(deleteDataFromWarehouse())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SynchronizeWarehouse);
