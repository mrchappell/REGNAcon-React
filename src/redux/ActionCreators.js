import * as ActionTypes from './ActionTypes';
import { CELEBS } from '../shared/celebs';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchCelebs = () => dispatch => {

    dispatch(celebsLoading());

    setTimeout(() => {
        dispatch(addCelebs(CELEBS));
    }, 2000);
};
export const celebsLoading = () => ({
    type: ActionTypes.CELEBS_LOADING
});

export const celebsFailed = errMess => ({
    type: ActionTypes.CELEBS_FAILED,
    payload: errMess
});

export const addCelebs = celebs => ({
    type: ActionTypes.ADD_CELEBS,
    payload: celebs
});