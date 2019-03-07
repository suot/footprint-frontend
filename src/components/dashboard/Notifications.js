import React, {Component} from 'react'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import moment from 'moment';

class Notifications extends Component {

    render(){
        return (
            <div className="section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Notifications</span>
                        <ul className={"notifications"}>
                            {
                                this.props.notifications && this.props.notifications.map(item=>{
                                    return (
                                        <li key={item.id}>
                                            <span>{item.user}  </span>
                                            <span>{item.content}  </span>
                                            {/*<span>{moment(item.time).fromNow()}</span>*/}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 2, orderBy:['time', 'desc']}
    ])
)(Notifications)
