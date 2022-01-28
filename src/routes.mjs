import { Router } from "express";

const route = Router();

route.get('/', (req, res) => {
  console.log('Hey routes');
  res.send('Hello World!');
});

route.get('/info', (req, res) => {
  console.log('Infomation route');
  res.send('Infomation route!');
});

export { route }; 