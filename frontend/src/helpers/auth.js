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

export function parseJWT(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export function isTokenExpired() {
  const token = getToken();
  if (!token) return true;
  const payload = parseJWT(token);
  if (!payload?.exp) return false;
  return payload.exp * 1000 < Date.now();
}