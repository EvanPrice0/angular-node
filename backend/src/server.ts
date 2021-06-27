import express, { json } from 'express';

const app = express();
const port = 8000;
app.get('/api/login', (req, res) => {
  res.status(200).json('Hello');
});
app.get('/', (req, res) => {
  res.status(200).json('Hi');
  });
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});