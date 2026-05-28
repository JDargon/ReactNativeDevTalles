import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface User {
    name: string,
    email: string,
}

interface AuthState {
    status: AuthStatus;
    isChecking: boolean;
    isAuthenticated: boolean;
    user?:User;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState<AuthStatus>("checking");

    const [user, setUser] = useState<User>()//

    useEffect(() => {
        setTimeout(() => {
            setStatus("unauthenticated")
        }, 1500);

    }, [])

    const loginWithEmailPassword = (email:string, password:string) => {//

        setUser({
            name: 'Fernando Herrera',
            email: email,
        })

    } 


    return (
        <AuthContext.Provider
            value={{
                status: status,//
                user:user,
                isChecking: status === 'checking',
                isAuthenticated: status === 'authenticated',
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
