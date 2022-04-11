// NOTE: Although object is being used, the code needed to create it needs to be run. Looking for a
// work around
import firebaseApp from "../../config/firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

/**
 * Creates a new user from a given email and password
 * @param email {string} the email address of the user
 * @param password {string} the password of the user
 */
function createUser(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        // Will execute when a user was created
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User was created");
        })
        // Will execute when there was an error in user creation
        .catch((error) => {
            console.log("There was an error in the user creation");
            console.log(`Here was the error code: ${error}`);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Here is the error code again: ${errorCode}`);
            console.log(`Here is the error message: ${errorMessage}`);
        });
}

/**
 * Signs a user in using the passed email and password
 * @param email {string} the email address of the user
 * @param password {string} the password of the user
 */
function signIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Found User");
        })
        // Will execute when there was an error in user creation
        .catch((error) => {
            console.log("There was an error in finding the user");
            console.log(`Here was the error code: ${error}`);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Here is the error code again: ${errorCode}`);
            console.log(`Here is the error message: ${errorMessage}`);
        });
}

export { createUser, signIn };
