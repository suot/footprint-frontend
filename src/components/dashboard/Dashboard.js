import React, { Component } from 'react'
import FootprintList from '../footprints/FootprintList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
                {/*<h1>Dashboard</h1>*/}
                {/*<Notifications />*/}
                <FootprintList footprints={this.props.footprints} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        footprints: state.footprint.footprints
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'footprints' }
    ])
)(Dashboard)