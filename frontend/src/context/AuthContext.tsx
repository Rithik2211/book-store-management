import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

interface AuthContextType {
    currentUser  : any;
    registerUser : (email: string, password: string) => Promise<any>;
    loginUser : (email: string, password: string) => Promise<any>;
    signInWithGoogle: any;
    logoutUser: any;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
    return useContext(AuthContext);
}
const googleProvider = new GoogleAuthProvider();

//Auth Provider

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider :FC<AuthProviderProps> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<any>();
    const [loading, setLoading] = useState(true);

    //register a user
    const registerUser = async(email:string, password:string) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    //Login a user
    const loginUser = async(email:string, password:string) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    //signIn With Google
    const signInWithGoogle = async() => {
        return await signInWithPopup(auth, googleProvider);
    }

    //Logout User
    const logoutUser = async() => {
        return signOut(auth)
    }

    //Manage User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if(user){
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, username : displayName, photo : photoURL
                }
            }
        })
        return () => unsubscribe();
    },[]) 

    const AuthContextValue: AuthContextType = {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logoutUser,
        loading
    };

    return (
        <AuthContext.Provider value={AuthContextValue}>
            {children}
        </AuthContext.Provider>
    )
}