
const api = "http://localhost:8000"

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const login = (email, password) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      "auth": {
        "email": [email,password]
      }
    })
  }).then(res => res.json())
