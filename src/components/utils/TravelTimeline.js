import React from 'react'
import {connect} from "react-redux";
import {deleteTravel} from "../../store/actions/travelActions";
import {Timeline, TimelineEvent} from 'react-event-timeline';
import moment from 'moment';


class TravelTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            travelList: null,
            timelines: []
        };
    }

    deleteHandler = (e, id) => {
        e.preventDefault();
        this.props.deleteTravel(id, this.props.auth.uid);
    }
    footprintsHandler = (e, latlng) => {
        e.preventDefault();
        console.log(latlng);
    }

    updateTimelines(){
        let timelines = [];

        this.props.travelList && this.props.travelList.map(travel => {
            const city = travel.city.name + ", " + travel.city.country;
            const _id = travel._id;
            const temporal = moment(travel.startDate).format('L') + " to " + moment(travel.endDate).format('L');
            const latlng = travel.city.latlng;

            timelines.push(
                <TimelineEvent
                    title={city}
                    buttons={ <a href='' style={{ color: '#01579B' }} onClick = { (e, id) => this.deleteHandler(e, _id)} title='Press to delete this record'>delete</a> }
                    createdAt={temporal}
                    icon={<i className='cui-calendar' onClick={ e => this.footprintsHandler(e, latlng)} title='Go to footprints'></i>}
                    container='card'
                    style={{ border: '1px solid #777', borderRadius: 3, fontWeight: 400, width: '200px' }}
                    cardHeaderStyle={{ backgroundColor: '#8bc34a', color: '#503331' }}
                    onClick={ e => this.footprintsHandler(e, latlng)}
                    key={_id}
                />
            )
        });

        this.setState({
            travelList: this.props.travelList,
            timelines: timelines
        })
    }

    componentWillMount() {
        this.updateTimelines();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.travelList !== this.props.travelList){
            this.updateTimelines();
        }
    }

    render() {
        if(this.props.travelList===null){
            return (
                <div className="animated fadeIn pt-1 text-center">Loading the timeline...</div>
            );
        }else if(this.props.travelList.length === 0){
            return (
                <div className="animated fadeIn pt-1 text-center">You do not have travel records</div>
            );
        }else{
            if(this.state.timelines.length === 0){
                return (
                    <div className="animated fadeIn pt-1 text-center">Loading travel records in the timeline</div>
                );
            }else{
                return(
                    <div style={{'maxHeight':'450px','overflow':'auto', 'width':'100%'}}>
                        <Timeline>
                            {this.state.timelines}
                        </Timeline>
                    </div>
                );
            }
        }
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        travelList: state.travel.travelList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTravel: (id, uid) => dispatch(deleteTravel(id, uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelTimeline);