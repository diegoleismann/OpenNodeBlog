async function Request(method, url, body) {
  const base_url = 'http://localhost:3000'
  const token = localStorage.getItem('authorization')
  const response = await fetch(base_url + url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return data;
}
export default Request