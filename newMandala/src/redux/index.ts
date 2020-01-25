import { combineReducers } from 'redux';
import boxStore from './boxStore/reducer';
import settingStore from './settingStore/reducer';

export default combineReducers({ boxStore, settingStore });
