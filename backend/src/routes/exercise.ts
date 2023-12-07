import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
  console.log('test');
  res.send(`Hey ${req.eventNames}`)
})

router.get('/:id', (req, res) => {
  res.send(`Hey ${req.params.id}`);
})

router.post('/', (req, res) => {
  res.send('test');
})
