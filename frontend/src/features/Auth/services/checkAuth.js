import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";

export const checkAuth = (username, password) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = {
        sucess: true,
        user: {
            username: "John",
            password: "J4xT678"
        },
    }

    try {
        /*const response = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();*/
        if (username === data.user.username && password === data.user.password) {
            window.alert(data.user.username);
            //dispatch({ type: "LOGIN", user: data.user });
            //navigate("/feed");
            return true
        } else {
            return false
            // throw new Error("Invalid credentials");
        }
    } catch (error) {
        console.error(error);
    }
};