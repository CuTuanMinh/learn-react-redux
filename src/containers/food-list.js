import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFood} from '../actions/index';

class FoodList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  createFoodListItems(){
    let listItems = this.props.foods.map(
      (eachFood) => {
        return (
          <li key={eachFood.id} onClick={
            () => {
              this.props.selectFood(eachFood);
            }
          }>
            Name Food: {eachFood.name}
          </li>
        );
      }
    );
    return listItems;
  }

  render(){
    return(
      <ul>
        <li>{this.createFoodListItems()}</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //convert state to props
  return {
    foods: state.foods //state.foods lay tu allReducers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectFood: selectFood}, dispatch);
}
let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);
//FoodContainer su dung nhu 1 react-component trong cac file khac
export default FoodContainer;
