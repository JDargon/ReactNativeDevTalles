import axios from "axios"
import type { UserListResponse } from '../interfaces/reqres.response';


export const loadUsersAction = async (page: number) => {

    try {
        const { data } = await axios.get<UserListResponse>(`https://reqres.in/api/users`, {
            params: {
                page: page
            },
            headers: {
                'x-api-key': 'free_user_3EZUWEOAZuQYRtlXrad8aEgDE6g',
            }
        })

        return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}

// explicar un poco lo que es el async y el await
// para la pagina (page) de la URL usamos interpolación ´${}´ = (`https://reqres.in/api/users?page=${ page }`)
// o usamos params con la elección escogida
// return data.data es porque data es un valor que da axios por defecto, pero coincide con el data como parámetro que
//nos devuelve la peticion
//la función LoadUserActions es una función en la cual no tenemos ninguna interacción con React. Esto es puramente TypeScript y Axios