import React from 'react'
import {connect} from "react-redux";
import {addTravelTime} from "../../store/actions/travelActions";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import '../../assets/DateRangePicker.scss';


class DatesRange extends React.Component {
    state = {
        date: [new Date(), new Date()],
    }

    onChange = date => {
        this.setState({ date });

        if(date){
            this.props.addTravelTime(date[0], date[1]);
        }else{
            this.props.addTravelTime(null, null);
        }
    }

    render() {
        return (
            <DateRangePicker
                onChange={this.onChange}
                value={this.state.date}
            />
        );
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        addTravelTime: (startDate, endDate) => dispatch(addTravelTime(startDate, endDate))
    }
}

export default connect(null, mapDispatchToProps)(DatesRange);