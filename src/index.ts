import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { database } from './database';
import { optionsCors } from './config/cors';
import { COOKIE } from './config/secret';
import route from './routes';

const app = express();
database();

app.use(cors(optionsCors));
app.use(express.json());
app.use(cookieParser(COOKIE));

route(app);

const port = process.env.PORT || 3005;
app.listen(port, () => console.log('App is listening on port ' + port));
