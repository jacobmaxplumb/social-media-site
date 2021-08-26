import { SET_LOADING, SET_PROFILE } from '../actions/profile.actions'

const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    age: null,
    isLoading: false
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_PROFILE:
            return {...state, ...action.profile, isLoading: false}
        default:
            return state;
    }
}