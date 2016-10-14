export const getTransactions = () => {
  const myHeaders = new Headers({
    'WEB-API-key': '35bd5a35-5909-460e-b3c2-20073d9c4c2e',
    'Authorization': 'Bearer demo_001',
  });

  const prodPrefix = 'https://api.csas.cz/sandbox/webapi/api/v1/netbanking/my/accounts/CZ5508000000000379554193';
  const devPrefix = 'http://localhost:8080';
  const prefix = process.env.NODE_ENV === 'development' ? devPrefix : prodPrefix;
  const URL = prefix + '/transactions';
  return fetch(URL, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  }).then(
    response => response.json(),
    err => console.log('err', err)
  );
};
