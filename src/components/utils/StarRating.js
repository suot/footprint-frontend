import React from 'react'
import {connect} from "react-redux";
import {addRating} from "../../store/actions/travelActions";
import Rating from 'react-rating';


class StarRating extends React.Component {
    onClickHandler = value => {
        if(value === 0){
            alert("Minimum rating should be 1");
        }else{
            this.props.addRating(value);
        }
    }

    render() {
        return (
            <Rating
                emptySymbol={['fa fa-star-o fa-2x text-warning', 'fa fa-star-o fa-2x text-warning', 'fa fa-star-o fa-2x text-warning', 'fa fa-star-o fa-2x text-warning', 'fa fa-star-o fa-2x text-warning']}
                fullSymbol={['fa fa-star fa-2x text-warning', 'fa fa-star fa-2x text-warning', 'fa fa-star fa-2x text-warning', 'fa fa-star fa-2x text-warning', 'fa fa-star fa-2x text-warning']}
                onClick={value => this.onClickHandler(value)}
            />
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addRating: (rating) => dispatch(addRating(rating))
    }
}

export default connect(null, mapDispatchToProps)(StarRating);