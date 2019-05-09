import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { combineReducers } from 'redux';

// ========================================================================

// STATE 

const NAP = 'napping'
const EAT = 'eating'
const PLAY = 'playing'
const DROOL = 'drooling'

const MILLA = 'Milla'
const SEBBY = 'Sebby'
const EMMY = 'Emmy'

const initialState = {
    name: MILLA,
    activity: DROOL
}

// ========================================================================

// ACTIONS + ACTION CREATORS 
const ACTION_NAP = NAP
const ACTION_EAT = EAT
const ACTION_PLAY = PLAY


function setToNapping() {
    return {
        type: ACTION_NAP
    }
}

function setToEating() {
    return {
        type: ACTION_EAT
    }
}

function setToPlaying() {
    return {
        type: ACTION_PLAY
    }
}

window.setToNapping = setToNapping;
window.setToEating = setToEating;
window.setToPlaying = setToPlaying;

const ACTION_SET_NAME = ''

function setName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name,
        }
    }
}

window.setName = setName;

// ========================================================================

// REDUCER

function setActivity(state=initialState.activity, action={type: ''}) {
    switch(action.type) {
        case ACTION_NAP:
            return NAP
        break;
        case ACTION_EAT:
            return EAT
        break;
        case ACTION_PLAY:
            return PLAY
        break;
        default:
            return state;
        break;
    }
}

function names(state=initialState.name, action={type: ''}) {
    switch(action.type) {
        case ACTION_SET_NAME:
            // const newName = action.payload.name
            // console.log(newName);
            return action.payload.name
        break;
        default:
            return state
        break;
    }
}

window.names = names;

// ========================================================================

// STORE

const rootReducer = combineReducers({
    name: names, 
    activity: setActivity
});

const store = createStore(rootReducer);
window.store = store;


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
