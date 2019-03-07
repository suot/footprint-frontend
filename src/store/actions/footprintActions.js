
export const addFootprint = (footprint) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        //const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('footprints').add({
            ...footprint,
            userId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type: 'ADD_FOOTPRINT', footprint });
        }).catch((err)=>{
            dispatch({ type: 'ADD_FOOTPRINT_ERROR', err })
        })

    }
}
