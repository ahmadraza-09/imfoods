import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        return storage.getAuth();
    });

    useEffect(() => {
        storage.saveAuth(authState);
    }, [authState]);

    const login = async (email, password) => {
        const users = storage.getUsers();
        const user = users.find(
            (u) => u.email === email && u.password === password && u.role === 'admin'
        );

        if (user) {
            const newAuthState = { isAuthenticated: true, user };
            setAuthState(newAuthState);
            return true;
        }
        return false;
    };

    const logout = () => {
        const newAuthState = { isAuthenticated: false, user: null };
        setAuthState(newAuthState);
        storage.clearAuth();
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
