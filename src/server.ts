import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({ status: 'Hello World!' }));
app.use(routes);

app.listen(3333, () => console.log('Servera running... Lorem Ipsum.'));
