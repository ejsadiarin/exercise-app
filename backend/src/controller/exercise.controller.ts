import { Router } from 'express';

export const router = Router();

// Get all exercises
router.get('/', (req, res) => {
  console.log('test');
  res.send(`Hey ${req.eventNames}`)
})

// Get specific exercise
router.get('/:id', (req, res) => {
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

// Add new exercise
router.post('/', (req, res) => {
  res.send('test');
})

// Update exercise
router.put('/:id', (req, res) => {
  res.send('test');
})

// Delete exercise
router.delete('/:id', (req, res) => {
  res.send('test');
})
