import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Celebs } from './celebs';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            celebs: Celebs,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)

    );

    return store;
}

