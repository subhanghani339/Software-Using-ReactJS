import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
let signUpUser = (obj) => {
    return new Promise((resolve,reject)=>{
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            obj.id = res.user.uid
        })
        .catch((error) => {
            const errorCode = error.code;
        })
            const errorMessage = error.message;
            // ..
            
    });
}