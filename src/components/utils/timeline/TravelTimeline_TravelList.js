import React from 'react'
import {connect} from "react-redux";
import {deleteTravel, changeMapCenter_TravelList} from "../../../store/actions/travelActions";
import {Timeline, TimelineEvent} from 'react-event-timeline';
import moment from 'moment';


class TravelTimeline_TravelList extends React.Component {
    deleteHandler = (e, id) => {
        e.preventDefault();
        this.props.deleteTravel(id, this.props.auth.uid);
    };

    footprintsHandler = (e, latlng) => {
        e.preventDefault();
        this.props.changeMapCenter_TravelList(latlng);
    };

    updateTimelines(){
        let timelines = [];
        this.props.travelList && this.props.travelList.map(travel => {
            const city = travel.city.name + ", " + travel.city.country;
            const _id = travel._id;
            const temporal = moment(travel.startDate).format('L') + " to " + moment(travel.endDate).format('L');
            const latlng = travel.city.latlng;
            const tooltip = "Fly to your footprints in " + city;

            return timelines.push(
                <TimelineEvent
                    title={city}
                    buttons={ <button style={{ color: '#503331', backgroundColor: '#8bc34a', border: '1px solid #777', borderRadius: '3px'}} onClick = { (e) => this.deleteHandler(e, _id)} title='Click to delete this record'>delete</button> }
                    createdAt={temporal}
                    icon={<i className='cui-calendar' onClick={ e => this.footprintsHandler(e, latlng)} title={tooltip} />}
                    container='card'
                    style={{ border: '1px solid #777', borderRadius: 3, fontWeight: 400, width: '200px' }}
                    cardHeaderStyle={{ backgroundColor: '#8bc34a', color: '#503331' }}
                    // onClick={ e => this.footprintsHandler(e, latlng)}
                    key={_id}
                />
            )
        });
        return timelines;
    }

    render() {
        if(this.props.travelList){
            if(this.props.travelList.length === 0){
                return (
                    <div className="animated fadeIn pt-1 text-center">You do not have travel records</div>
                );
            }else{
                let timelines = this.updateTimelines();
                return(
                    <div style={{'maxHeight':'450px','overflow':'auto', 'width':'100%'}}>
                        <Timeline>
                            {timelines}
                        </Timeline>
                    </div>
                );
            }
        }else{
            return (
                <div className="animated fadeIn pt-1 text-center" />
            );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        travelList: state.travel.travelList,
        lastAddedTravel: state.travel.lastAddedTravel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTravel: (id, uid) => dispatch(deleteTravel(id, uid)),
        changeMapCenter_TravelList: latlng => dispatch(changeMapCenter_TravelList(latlng))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelTimeline_TravelList);