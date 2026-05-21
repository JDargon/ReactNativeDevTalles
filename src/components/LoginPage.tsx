import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const { status } = useAuthContext();

    return (
        <>
            <h3>Login</h3>

            <span>{ status }</span>
        </>
    );
};
