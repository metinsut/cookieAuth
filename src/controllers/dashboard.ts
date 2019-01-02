import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
   console.log(req.body.name);
   res.json({ name: 'DASHBOARD' });
});

export default router;
