import express from 'express';
import jsonServer from 'json-server';
import path from 'path';

const router = jsonServer.router(path.join(__dirname, '/assets/db.json'));

const jsonServerApp = jsonServer.create();
const middlewares = jsonServer.defaults();

jsonServerApp.use(middlewares);
jsonServerApp.use(router);

const app = express();

app.use('/api', jsonServerApp);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
