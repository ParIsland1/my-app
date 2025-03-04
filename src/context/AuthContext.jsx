import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    const login = (user, password) => {
        console.log("Logging in:", user);  // ✅ Debugging
        setIsAuthenticated(true);
        setUsername(user);  // ✅ Store username
    };

    const logout = () => {
        console.log("Logging out...");
        setIsAuthenticated(false);
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);
