import { SET_PROFILE, UPDATE_AGE, UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from "../actions/profile.actions";

const initialState = {
    firstName: '',
    lastName: '',
    id: null,
    age: 0
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE:
            return {...state, ...action.profile} // action.profile {firstName: '', lastName: '' .....}
        case UPDATE_FIRST_NAME:
            return {...state, firstName: action.firstName}
        case UPDATE_LAST_NAME:
            return {...state, lastName: action.lastName}
        case UPDATE_AGE:
            return {...state, age: action.age}
        default:
            return state;
    }
}