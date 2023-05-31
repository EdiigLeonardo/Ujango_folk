//Deve retornar o username e se ele está logado ou não
//além do seu time;
//O Fetch deve ser feito no servidor, mas é fake e deve ser guardado no store do REDUX

import {logIn} from "../services/Auth"

export const useAuth = () => {
    const username = "";
    const password = "";

    const {isLoggedIn} = logIn(username, password);
    return {isLoggedIn,
        username};
};