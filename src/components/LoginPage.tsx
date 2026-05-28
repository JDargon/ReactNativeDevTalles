import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const { isChecking, isAuthenticated } = useAuthContext();

    return (
        <>
            {isAuthenticated ? (
                <>
                    <h3>Bienvenido</h3>

                    <button className="bg-blue-500 p-2 text-white rounded-xl mt-2">
                        Salir
                    </button>
                </>
            ) : (
                <>
                    <h3>Ingresar a la aplicación</h3>

                    <button className="bg-blue-500 p-2 text-white rounded-xl mt-2">
                        Ingresar
                    </button>
                </>

            )}
        </>
    );
};