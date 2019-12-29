import {createStore, combineReducers} from 'redux';
import { Celebs } from './celebs';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            celebs: Celebs,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
}