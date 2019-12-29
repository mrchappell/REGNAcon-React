import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (celebId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        celebId: celebId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchCelebs = () => dispatch => {

    dispatch(celebsLoading());

    return fetch(baseUrl + 'celebs')
    .then(response => {
        if (response.ok) {
             return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);                error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    }
)
    .then(response => response.json())
    .then(celebs => dispatch(addCelebs(celebs)))
    .catch(error => dispatch(celebsFailed(error.message)));
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

export const fetchComments = () => dispatch => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                error.response = response;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromotions = () => (dispatch) => {
    
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});