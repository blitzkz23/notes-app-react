const BASE_URL = "https://notes-api.dicoding.dev/v1";

/**
 * Menaruh token ke dalam local storage
 * @param  {} accessToken
 */
function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

/**
 * Mengambil token dari local storage
 */
function getAccessToken() {
  return localStorage.getItem("accessToken");
}

/**
 *
 * Create user register request to API service.
 * @param {*} param0
 * @returns
 */
async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, message: responseJson.message };
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, data: responseJson.data };
}

/**
 *
 * Fetch data dengan access token
 * @param {*} url
 * @param {*} options
 * @returns
 */
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

/**
 *
 * Mendapatkan informasi pengguna yang telah login
 * @returns
 */
async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export { register, login, putAccessToken, getAccessToken, getUserLogged };
