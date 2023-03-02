import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

class UserService {
    login (user) {
        signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
            const u = userCredential.user;
            console.log(u.displayName + ' connected !');
            return u;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ' : ' + errorMessage);
            return null;
        });
    }

    create (u) {
        createUserWithEmailAndPassword(auth, u.email, u.password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            // Update profile
            this.updateProfile(user, {displayName: u.username});

            return user;
        }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            return null;
        });
    }

    logout () {
        auth.signOut().then(() => {
            // Sign-out successful.
            console.log("Sign-out successful");
        }).catch((error) => {
            // An error happened.
            console.log("An error happened : " + error.message);
        });
    }

    updateProfile (user, updatedData) {
        updateProfile(user, updatedData).then(() => {
            console.log("Profile updated !");
            return true;
        }).catch((error) => {
            console.log(error);
            return false;
        })
    }
}

export default new UserService();