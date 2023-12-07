import { Router } from 'express';

export const router = Router();

// Get specific user
router.get('/:id', (req, res) => {
  res.send('test');
});

// Add new user
router.post('/', (req, res) => {
  res.send('test');
});

// Update specific user details
router.put('/:id', (req, res) => {
  res.send('test');
});
