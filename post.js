const optionspost = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: '{"id":"3","nome":"Neto","email":"Neto@Segato"}'
  };
  
  fetch('http://localhost:3333/emails', optionspost)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

