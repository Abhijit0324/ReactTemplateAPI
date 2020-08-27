import React , { Component } from 'react';
import './App.css';
import  Weather from './Components/Weather';
import  MySecond from './Components/mySecond';
import { connect } from 'react-redux';
import {setName} from './Store/Action/ActionGenerator';
import {GetWeather} from './Store/Action/ActionTask';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    //Just shown how to declare Local State.
    this.state = {
      Fname: 'Satish',
      lname: 'Joshi'
    };
  }

  componentDidMount(){
    console.log("CallLog componentDidMount")
    //this.props.GetWeather('Mumbai');
    this.props.setNameEvent('Abhijit', 'Banerjee');
  }
    
    render() {
    return (
      <div className="App">
        <Weather />
        {/* <MySecond /> */}
      </div>
    )

    }
  }

  const mapDispatchToProps = dispatch => ({
    setNameEvent: (firstName, lastName) => dispatch(setName(firstName, lastName)),
    GetWeather:(cityName) => dispatch(GetWeather(cityName)),
  });

  const mapStateToProps = (state) => {
    console.log('App,js' + JSON.stringify(state))
    return {
        firstName: state.Reducer.firstName
    };
  }

export default connect(mapStateToProps,  mapDispatchToProps)(App);               

