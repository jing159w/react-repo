import { combineReducers } from 'redux';

import InitReducer from './reducers/init';
import NavbarReducer from './reducers/navbar';

const reducers = {
  init: InitReducer,
  navbar: NavbarReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
