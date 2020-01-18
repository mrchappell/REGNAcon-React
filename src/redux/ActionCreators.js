import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (celebId, rating, author, text) => dispatch => {
    
    const newComment = {
        celebId: celebId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};

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


export const fetchPartners = () => dispatch => {

    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
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
    .then(partners => dispatch(addPartners(partners)))
    .catch(error => dispatch(partnersFailed(error.message)));
};


export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});

export const postFeedback = (feedback) => {

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .catch(response => {
            console.log('post feedback', response);
            alert('Thank you for your feedback' + response);
        })
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};