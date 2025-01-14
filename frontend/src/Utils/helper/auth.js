export const getLoginStatusFromCookies = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'isLogged') {
            return value === 'true';
        }
    }
    return false;
};
// get user from cookies
export const getUserDataFromCookies = () => {
    const cookies = document.cookie.split(';');
    const userData = {};
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'user') {
            Object.assign(userData, JSON.parse(decodeURIComponent(value)));
        }
    }
    return userData;
};

