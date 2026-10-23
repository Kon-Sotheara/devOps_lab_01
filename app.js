import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, GitHub Actions!');
});

export default app;
