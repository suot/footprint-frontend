import React from 'react'
//import ReactAutocomplete from 'react-autocomplete'
import cities from 'cities.json';
import Autosuggest from 'react-autosuggest';
import '../../assets/cityInput.css';
import {addCity} from "../../store/actions/travelActions";
import {connect} from "react-redux";


const shouldRenderSuggestions = value => {
    return value.trim().length > 2;
}

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    return cities.filter(city =>city.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    // return inputValue.length <= 3 ? cities.filter(city => city.name.toLowerCase() === inputValue) : cities.filter(city =>city.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

};

// When suggestion is clicked, Autosuggest needs to populate the input based on the clicked suggestion. Teach Autosuggest how to calculate the input value for every given suggestion.
const getSuggestionValue = suggestion =>  suggestion.name+"_"+suggestion.country+"_"+suggestion.lat+"_"+suggestion.lng;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}, {suggestion.country} [{suggestion.lat.substr(0, 6)}, {suggestion.lng.substr(0, 6)}]
    </div>
);

class CityInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            suggestions: [],
            value: ''
        }
    }

    onChange = (event, { newValue }) => {
        // on selection
        if(newValue.indexOf("_") > -1){
            const city = newValue.split('_');
            this.setState({
                ...this.state,
                value: city[0]
            });

            let newCity = {
                name: city[0],
                country: city[1],
                lat: city[2],
                lng: city[3]
            };

            this.props.addCity(newCity);
        }else{
            this.setState({
                ...this.state,
                value: newValue
            })
        }
    };

    // Autosuggest will call this function every time you need to update suggestions.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            //placeholder: 'Type a city name',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                shouldRenderSuggestions={shouldRenderSuggestions}
                inputProps={inputProps}
            />
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addCity: (newCity) => dispatch(addCity(newCity))
    }
}

export default connect(null, mapDispatchToProps)(CityInput);