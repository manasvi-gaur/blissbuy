export const getLoginStatusFromCookies = () => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "isLogged") {
      return value === "true";
    }
  }
  return false;
};
// get user from cookies
export const getUserDataFromCookies = () => {
  const cookies = document.cookie.split(";");
  const userData = {};
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "user") {
      Object.assign(userData, JSON.parse(decodeURIComponent(value)));
    }
  }
  return userData;
};

export const setUserIdToLocalStorage = (userId, expirationMinutes = 60) => {
  const expirationTime = new Date().getTime() + expirationMinutes * 60 * 1000;
  const userData = { userId, expirationTime };
  localStorage.setItem("userId", JSON.stringify(userData));
};

export const getUserIdFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem("userId"));
  if (!userData) return null;

  const currentTime = new Date().getTime();
  if (currentTime > userData.expirationTime) {
    localStorage.removeItem("userId");
    return null;
  }

  return userData.userId;
};

export const setTokenToLocalStorage = (token, expirationMinutes = 60) => {
  const expirationTime =
    new Date().getTime() + 72 * expirationMinutes * 60 * 1000;
  const tokenData = { token, expirationTime };
  localStorage.setItem("token", JSON.stringify(tokenData));
};

export const getTokenFromLocalStorage = () => {
  const tokenData = JSON.parse(localStorage.getItem("token"));
  if (!tokenData) return null;

  const currentTime = new Date().getTime();
  if (currentTime > tokenData.expirationTime) {
    localStorage.removeItem("token");
    return null;
  }

  return tokenData.token;
};
