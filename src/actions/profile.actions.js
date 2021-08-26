import axios from "axios";

export const SET_LOADING = 'Set Loading';
export const SET_PROFILE = 'Set Profile';

export const getProfile = () => dispatch => {
    dispatch(setLoading(true));
    axios.get('http://localhost:3000/profile').then(result => {
        dispatch(setProfile(result.data));
    });
}

export const updateProfile = profile => dispatch => {
    axios.put('http://localhost:3000/profile', profile).then(() => {
        dispatch(getProfile())
    })
}

export const setLoading = isLoading => {
    return {type: SET_LOADING, isLoading}
}

export const setProfile = profile => {
    return {type: SET_PROFILE, profile}
}