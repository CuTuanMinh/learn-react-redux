//ket noi cac reducer
import FoodReducer from './foods-reducer';
import UserReducer from './users-reducer';
import {combineReducers} from 'redux';
import ActiveFoodReducer from './active-food-reducer'

const allReducers = combineReducers({
  foods: FoodReducer,
  users: UserReducer,
  activeFood: ActiveFoodReducer
});

export default allReducers;
