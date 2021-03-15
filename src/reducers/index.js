import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import {firestoreReducer } from 'redux-firestore' 
import projectReducer from 'reducers/projectReducer';


const rootReducer = combineReducers({
  firebase: firebaseReducer,// Add firebase to reducers
  firestore: firestoreReducer, // <- needed if using firestore
  project: projectReducer,
});

export default rootReducer;
