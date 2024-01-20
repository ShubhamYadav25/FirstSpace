import React, { ReactElement, createContext, useState, ReactNode, Children, useContext } from 'react';
import { AuthContextType, User } from '../../shared/domain/interfaces';
import { removeSessionByKey, setObjectDataSession } from '../../shared/domain/sessionStorage';

// Auth context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode })  => {

    const [user, setUser] = useState<User | null>(null);

    // Login verification
    const login = (email: string, password: string) => {
        // TODO: CALL API 

        // Dummy data
        const loggedInUser: User = {
          email,
          password
        };
        setUser(loggedInUser);

        console.log('userData ', loggedInUser);
        
        // Storing Session
        setObjectDataSession("userData", loggedInUser);
    };

    // LogOut
    const logout = () => {
        // Logout logic: clear user data.
        setUser(null);
        removeSessionByKey("userData");
    };

    // Authenticate user
    const isAuthenticated = !!user;


    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
