import express from 'express';
const app = express();
const port = 3000;

// generic endpoints on top and more specfic endpoints on bottom

app.get('/', (req, res) => {
  res.send('yo');
})

app.get('/health', (req, res) => {
  console.log('health check');
  res.send('ok');
})

app.get('/:id', (req, res) => {
  console.log(`Query params: ${JSON.stringify(req.query)}`);
  console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
  console.log(`Method: ${req.method}`);
  res.status(202)
    .header({
      'X-Custom-Header': 'foo',
      'X-Custom-Header-2': 'yesyesy'
    })
    .send(`Hey ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`App is listening to http://localhost:${port}`);
})
