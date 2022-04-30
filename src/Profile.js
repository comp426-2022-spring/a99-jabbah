import React from 'react';
import "./App.css";
import { getAuth, deleteUser } from "firebase/auth";


function Profile() {

    const auth = getAuth();
    const user = auth.currentUser;

    function deleteVerify() {
        deleteUser(user);
        alert("Account Deleted!");
    }

    deleteUser(user).then(() => {
        // User deleted.
      }).catch((error) => {
        // An error ocurred
      });

    if (user) {

            const displayName = user.displayName;
            const email = user.email;

        return (
            <div className='profile-cont'>
                Logged in as: {displayName} 
                <t>{user?.email}</t>
                <br></br><br></br>
                <button className="login-button" onClick={deleteVerify}>
                    Delete
                </button>
            </div>
        )
    } else {
        // No user is signed in.
        return (
            <div className='please-sign-in-cont'>
                <div className='please-sign-in'>
                    PLEASE SIGN IN!
                </div>
            </div>
    
        )
    }
}

export default Profile;