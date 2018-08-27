import { combineReducers } from 'redux';

import posts from './postsReducers';
import postsById from './postsByIdReducers';

export default combineReducers({
    posts,
    postsById
})