import React, { Component } from 'react'
import FootprintList from '../footprints/FootprintList'
import { connect } from 'react-redux'

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
    return {
        footprints: state.footprint.footprints
    }
}

export default connect(mapStateToProps)(Dashboard)