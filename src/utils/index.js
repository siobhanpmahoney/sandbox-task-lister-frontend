import ls from 'local-storage'

const API_ROOT = 'http://localhost:3000/api/v1'

const HEADERS = { 'Content-Type': 'application/json', 'Accepts': 'application/json' }

const AUTHORIZED_HEADERS = () => {
  const jwt = ls.get('jwt_token')
  return {
    'Content-Type': 'application/json',
    'Accepts': 'application/json',
    'Authorization': `Bearer ${jwt}`
  }
}


const login_headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accepts': 'application/json'
  }
}




export const loginCurrentUser = (credentials) => {
  const user = {user: credentials}
  return fetch(`${API_ROOT}/login`, {
    method: 'POST',
    headers: login_headers(),
    body: JSON.stringify({
      user: credentials

    })
  }).then(res => res.json())
}



// passing JWT token to /profile, returns user data
export const fetchCurrentUser = (jwt) => {
  return fetch(`${API_ROOT}/profile`, {
    method: 'GET',
    headers: AUTHORIZED_HEADERS()
  })
  .then(response => response.json())
}
