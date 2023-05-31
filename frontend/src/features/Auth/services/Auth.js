
export const logIn = (username, password) =>{
    //request user to Log In
    return {
        isLoggedIn: false,
        username: `@${username}`,
        sessionToken: '1234567890'
    }
}

export const logOut = (username) =>{
    return {
        isLoggedIn: false,
        username: `@${username}`,
        sessionToken: '1234567890'
    }
}

export const registerUser = (username, password) =>{
    return {
        isLoggedIn: true,
        username: `@${username}`,
        sessionToken: '1234567890'
    }
}