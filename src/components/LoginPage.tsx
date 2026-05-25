import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {
    const { isChecking, isAuthenticated } = useAuthContext();

    return (
        <>
            <h3>Login</h3>

            {isChecking && <span>Comprobando sesión...</span>}

            {!isChecking && !isAuthenticated && <span>Usuario no autenticado</span>}

            {isAuthenticated && <span>Usuario autenticado</span>}

        </>
    );
};