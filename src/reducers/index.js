// @flow

import { combineReducers } from 'redux';

import posts from './postsReducers';
import postsById from './postsByIdReducers';
import persistReducer from './persistReducer'


export default combineReducers({
    posts,
    postsById,
    persistReducer
})