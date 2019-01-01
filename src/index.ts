import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { database } from './database';
import { optionsCors } from './config/cors';
import route from './routes';

const app = express();
database();

app.use(cors(optionsCors));
app.use(cookieParser());
app.use(express.json());

route(app);

const port = process.env.PORT || 3005;
app.listen(port, () => console.log('App is listening on port ' + port));
