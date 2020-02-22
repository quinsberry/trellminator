import { combineReducers } from 'redux';

import cards from './cards';
import panels from './panels';

export default combineReducers({
  cards,
  panels
});