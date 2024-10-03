export const getStorage = () => {
    return sessionStorage.getItem("register_access_token")
}

export const setStorage = (token) => {
    sessionStorage.setItem('register_access_token', token)
}

export const getStorageR = () => {
    return sessionStorage.getItem("register_refresh_token")
}

export const setStorageR = (token) => {
    sessionStorage.setItem('register_refresh_token', token)
}

export const clearStorage = () => {
    sessionStorage.removeItem('register_access_token')
    sessionStorage.removeItem('register_refresh_token')
}