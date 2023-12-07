import express from 'express';
import { exerciseRouter, userRouter } from './routes';

const app = express();
const port = 3000;

// generic endpoints on top and more specfic endpoints on bottom

app.use(express.json());

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`App is listening to http://localhost:${port}`);
})
