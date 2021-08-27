import { UPDATE_LOADING } from "../actions/app.actions";

const initialState = {
    isLoading: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_LOADING:
            return {...state, isLoading: !state.isLoading}
        default:
            return state;
    }
}