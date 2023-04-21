import decode from 'jwt-decode';

// get user data from JSON web token by decoding it
export function getUser() {
  return decode(getToken());
}

// return `true` or `false` if token exists (does not verify if it's expired yet)
export function loggedIn() {
  const token = getToken();
  return token ? true : false;
}

export function getToken() {
  // Retrieves the user token from localStorage
  return localStorage.getItem('id_token');
}

export function login(idToken) {
  // Saves user token to localStorage and reloads the application for logged in status to take effect
  localStorage.setItem('id_token', idToken);
  window.location.assign('/');
}

export function logout() {
  // Clear user token and profile data from localStorage
  localStorage.removeItem('id_token');
  // this will reload the page and reset the state of the application
  window.location.reload();
}
