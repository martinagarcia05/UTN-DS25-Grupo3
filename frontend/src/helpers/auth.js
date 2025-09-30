export function setAuth(token, role, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
  localStorage.setItem('usuario', JSON.stringify(user));
}

export function getToken() {
  return localStorage.getItem('token');
}

export function getRole() {
  return localStorage.getItem('role');
}

export function getUser() {
  const data = localStorage.getItem('usuario');
  return data ? JSON.parse(data) : null;
}

export function clearAuth() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('usuario');
}
