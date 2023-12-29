import dotenv from 'dotenv';
import express from 'express';
import { exerciseRouter, userRouter } from './routes';

dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev' });

const app = express();
const port = 3000;


// middlewares:
app.use(express.urlencoded()); // for application/x-www-form-urlencoded (forms)
app.use(express.json());

// routes:
// - generic endpoints on top and more specfic endpoints on bottom
app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`App is listening to http://localhost:${port}`);
})
