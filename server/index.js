
// require('dotenv').config();
const path = require('path');
import express from 'express';
let angular_cli_client_url = "http://localhost:4200";

export default (app, http) => {
  app.use(express.json());

  app.get('/auth', (req, res) => {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
    );
  });

  app.get('/oauth-callback', ({ query: { code } }, res) => {
    const body = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    };
    const opts = { headers: { accept: 'application/json' } };
    axios.post('https://github.com/login/oauth/access_token', body, opts)

      .then((_res) => _res.data.access_token)
      .then((token) => {
        console.log('My token:', token);
        res.redirect(`${angular_cli_client_url}/?token=${token}`);
      })
      .catch((err) => res.status(500).json({ err: err.message }));
  });
}
