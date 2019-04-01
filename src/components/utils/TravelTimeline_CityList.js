import React from 'react'
import {connect} from "react-redux";
import {changeMapCenter_CityList} from "../../store/actions/warehouseActions";
import {Timeline, TimelineEvent} from 'react-event-timeline';


class TravelTimeline_CityList extends React.Component {
    footprintsHandler = (e, latlng) => {
        e.preventDefault();
        this.props.changeMapCenter_CityList(latlng);
    }

    updateTimelines(){
        let timelines = [];
        let index = 0;
        this.props.cityList && this.props.cityList.map(city1 => {
            index++;
            const city = "No."+index+": " + city1.name + ", " + city1.country;
            const latlng = city1.latlng;
            const tooltip = "Fly to: " + city1.name;
            const _id = city1._id

            timelines.push(
                <TimelineEvent
                    title={city}
                    icon={<i className='cui-calendar' onClick={ e => this.footprintsHandler(e, latlng)} title={tooltip}></i>}
                    container='card'
                    style={{ border: '1px solid #777', borderRadius: 3, fontWeight: 400, width: '200px' }}
                    cardHeaderStyle={{ backgroundColor: '#8bc34a', color: '#503331' }}
                    key={_id}
                />
            )
        });
        return timelines;
    }

    render() {
        if(this.props.cityList.length === 0){
            console.log("render timelines of length: 0");

            return (
                <div className="animated fadeIn pt-1 text-center">No result</div>
            );
        }else{
            let timelines = this.updateTimelines();
            console.log("render timelines of length: ", timelines.length);

            return(
                <div style={{'maxHeight':'450px','overflow':'auto', 'width':'100%'}}>
                    <Timeline>
                        {timelines}
                    </Timeline>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        cityList: state.warehouse.cityList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMapCenter_CityList: latlng => dispatch(changeMapCenter_CityList(latlng))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelTimeline_CityList);