import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, GitHub Actions!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
