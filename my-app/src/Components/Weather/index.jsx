
import React , { Component }from 'react';
import {connect} from 'react-redux';
import {GetWeather, GetDailyForcast} from '../../Store/Action/ActionTask';
import './weather.css'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCityName: ''
    };
    
    this.searchEvent = this.searchEvent.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  searchEvent(){
    this.props.GetWeather(this.state.inputCityName);
  }

  updateInputValue(evt) {
    this.setState({
      inputCityName: evt.target.value
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.lat !== prevProps.lat){
      if(this.props.lat !== "" && this.props.lon !== ""){
        this.props.GetDailyForcast(this.props.lat, this.props.lon);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='cards'>
            <h1> Weather Application </h1>
            <h5 className='py-4'>
            <input value={this.state.inputCityName} onChange={this.updateInputValue}/>
            <button onClick={this.searchEvent}>Serach</button>
            </h5>
          </div>
        </div>
      </React.Fragment>
     );
    }
}

const mapDispatchToProps = dispatch => ({
  GetWeather:(cityName) => dispatch(GetWeather(cityName)),
  GetDailyForcast :(lat, lon) => dispatch(GetDailyForcast(lat, lon)),
});

const mapStateToProps = (state) => {
  console.log('Weather.js' + JSON.stringify(state))
  return {
      lat: state.serviceReducer.lat,
      lon: state.serviceReducer.lon, 
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Weather);   
 
 


  
  

 

             