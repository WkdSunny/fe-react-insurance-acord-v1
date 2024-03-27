import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './firebase'; // import your firebase auth instance

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup: (email, password) => auth.createUserWithEmailAndPassword(email, password),
    login: (email, password) => auth.signInWithEmailAndPassword(email, password),
    logout: () => auth.signOut(),
    resetPassword: (email) => auth.sendPasswordResetEmail(email),
    updateEmail: (email) => currentUser.updateEmail(email),
    updatePassword: (password) => currentUser.updatePassword(password),
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}