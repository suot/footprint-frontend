const initState = {
    authError: null,
    // status: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'SIGNUP_SUCCESS':
            console.log('Signup success');
            return {
                ...state,
                authError: null,
                // status: 'SIGN_UP_SUCCESS'
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error: ', action.err.message);
            return {
                ...state,
                authError: action.err.message
            }

        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGOUT_SUCCESS':
            console.log('Logout success');

            return {
                //state: null,
                authError: null
            }
        case 'LOGOUT_ERROR':
            console.log('Logout error');
            return {
                ...state,
                authError: 'Logout failed'
            }
        case 'PROFILE_UPDATE_SUCCESS':
            console.log('Profile update success');
            return {
                ...state,
                //state: null,
                //authError: null
            }
        case 'PROFILE_UPDATE_ERROR':
            console.log('Profile update error');
            return {
                ...state,
                authError: 'Profile update failed'
            }
        default:
            return state;
    }
}

export default authReducer