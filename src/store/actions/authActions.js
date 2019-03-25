
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            //create a user document in users collection
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName.slice(0, 1),
            })
        }).then(()=>{
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err=>{
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}


export const updateProfile = (newProfile) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore();

        firestore.collection('users').doc(newProfile.uid).set({
            firstName: newProfile.firstName,
            lastName: newProfile.lastName,
            gender: newProfile.gender,
            region: newProfile.region,
            avatar: newProfile.avatar,
        }).then(()=>{
            dispatch({ type: 'PROFILE_UPDATE_SUCCESS' })
        }).catch(err=>{
            dispatch({ type: 'PROFILE_UPDATE_ERROR', err})
        })
    }
}