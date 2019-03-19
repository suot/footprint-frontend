
export const addCity = (city) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_CITY', city });
    }
}

export const addFootprint = (footprint) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_FOOTPRINT', footprint });
    }
}

export const deleteFootprint = (footprint) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'DELETE_FOOTPRINT', footprint });
    }
}

export const addTravel = (travel) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_TRAVEL', travel });
    }
}