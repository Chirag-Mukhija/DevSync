import React, { useState, useEffect } from 'react'
import { auth, googleProvider } from "../firebase.js";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const SignInButton = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        
        return unsubscribe;
    }, []);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const token = await result.user.getIdToken();

            const response = await fetch("http://localhost:8080/api/users/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            const userData = await response.json();
            console.log(userData);
        } catch (error) {
            console.error("Error during Google sign-in:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    if (loading) return <button disabled>Loading...</button>;

    return (
        <>
            {user ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            )}
        </>
    );
}

export default SignInButton