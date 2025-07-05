const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎉 Backend is working!');
});

// Auth routes
app.post('/api/auth/signup', (req, res) => {
  const { email, password } = req.body;
  console.log('Signup:', email, password);
  res.send({ message: 'User signed up successfully' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login:', email, password);
  res.send({ token: 'dummy_token' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
