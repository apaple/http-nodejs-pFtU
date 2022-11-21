import { createServer } from 'http';

createServer((req, res) => {
  res.write('kontol kamu');
  res.end();
}).listen(process.env.PORT);
