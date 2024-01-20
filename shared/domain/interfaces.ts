export interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

  
export interface User {
    email: string;
    password: string;
}