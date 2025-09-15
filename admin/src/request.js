async function Request(method, url, body) {
  const base_url = 'http://localhost/api'
  const token = localStorage.getItem('authorization')
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`
  }
  if (['POST', 'PUT'].includes(method)) {
    options.body = body ? JSON.stringify(body) : ''
  }
  const response = await fetch(base_url + url, options);
  const data = await response.json();
  return data;
}
export default Request