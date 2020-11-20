import Axios from 'axios';

const TOKEN_KEY = 'DEMO';

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }