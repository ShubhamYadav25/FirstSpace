import { Role } from "react-native";

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

// SIGN UP INTERFACES 
export interface ISignUPForm {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}
