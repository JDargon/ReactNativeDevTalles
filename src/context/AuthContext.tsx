import { createContext, useContext, useEffect, useEffectEvent, useState, type PropsWithChildren } from "react";

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface User {
    name: string,
    email: string,
}

interface AuthState {
    status: AuthStatus,
    token?: string,
    user?: User,
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState<AuthStatus>("checking");

    useEffect(() => {
        setTimeout(() => {
            setStatus("unauthenticated")
        }, 1500);

    }, []) 


    return (
        <AuthContext.Provider value={{
            status: status,
            
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};
