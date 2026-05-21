import { createContext, useContext, type PropsWithChildren } from "react";

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface User {
    name: string;
    email: string;
} // esto lo hacemos para evitar anidar en AuthState

interface AuthState {
    status: AuthStatus;
    token?: string;

    user?: User;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    return (
        <AuthContext.Provider value={{
            status: 'checking'
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};
