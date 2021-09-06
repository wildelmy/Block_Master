import { types } from '../types/type.js'
import { firebase, google } from '../firebase/firebaseconfig.js'


export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
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