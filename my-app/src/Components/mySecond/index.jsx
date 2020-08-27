import React , { Component }from 'react';
import { connect } from 'react-redux';
import {setName} from '../../Store/Action/ActionGenerator'



class MySecond extends Component {
  constructor(props) {
    super(props);
    
    this.eventToChange = this.eventToChange.bind(this)
  }

  eventToChange()
  {
    this.props.setNameEvent('FirstName', 'LastName');
  }
    
  render() {
    const { firstName, lastName } = this.props;
    return (
      <React.Fragment>
          React Second Component {firstName} - {lastName}
          <button onClick={this.eventToChange}>Click</button>
      </React.Fragment>
     );
    }
  }


  const mapDispatchToProps = dispatch => ({
    setNameEvent: (firstName, lastName) => dispatch(setName(firstName, lastName))
  });

  const mapStateToProps = (state) => {
    console.log('>>>>> Just For chancking Global state :'+ JSON.stringify(state));
    return {
      firstName: state.Reducer.firstName,
      lastName: state.Reducer.lastName
    };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(MySecond);               