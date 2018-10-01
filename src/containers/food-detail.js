import React, {Component} from 'react';
import {connect} from 'react-redux';

class FoodDetail extends Component {
  render(){
    if (!this.props.activeFood) {
      return <h2>Select a food</h2>;
    }
    return (
      <div>
          <p>Description: {this.props.activeFood.description}</p>
          <p>Cost: {this.props.activeFood.cost}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeFood: state.activeFood
  };
}

let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;
