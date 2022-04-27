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
            <div>
                Logged in as: {displayName} 
                <t>{user?.email}</t>
                <button onClick={deleteVerify}>
                    Delete
                </button>
            </div>
        )
    } else {
        // No user is signed in.
        return (
            <div>
                PLEASE SIGNED IN!
            </div>
        )
    }
}

export default Profile;