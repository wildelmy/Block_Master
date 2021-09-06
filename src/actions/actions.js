import { types } from '../types/type.js'
import { firebase, google, facebook } from '../firebase/firebaseconfig.js'


export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
        .then(({user}) =>{
            console.log(user)
            dispatch(loginAction(user.uid,user.displayName))
        })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebook)
        .then(({user}) =>{
            console.log(user)
            dispatch(loginAction(user.uid,user.displayName))
        })
    }
}

export const loginAction= (id, displayName) => {
    return{
        type: types.login,
       payload:{
           id,
           displayName
       }
    }
}