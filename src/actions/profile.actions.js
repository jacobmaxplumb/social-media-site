import axios from "axios"

export const SET_PROFILE = 'Set Profile';
export const UPDATE_FIRST_NAME = 'Update First Name';
export const UPDATE_LAST_NAME = 'Update Last Name';
export const UPDATE_AGE = 'Update Age';

export const getProfileAsync = () => dispatch => {
    axios.get('http://localhost:3000/profile').then(result => {
        dispatch(setProfile(result.data)) // {firstName: '', lastName: '', id: 1, age: 30}
    })
}

export const updateProfileAsync = profile => dispatch => {
    axios.put('http://localhost:3000/profile', profile).then(() => {
        dispatch(getProfileAsync()) // {firstName: '', lastName: '', id: 1, age: 30}
    })
}

export const updateFirstName = firstName => {
    return {type: UPDATE_FIRST_NAME, firstName}
}

export const updateLastName = lastName => {
    return {type: UPDATE_LAST_NAME, lastName}
}

export const updateAge = age => {
    return {type: UPDATE_AGE, age}
}

export const setProfile = profile => {
    return {type: SET_PROFILE, profile}
}