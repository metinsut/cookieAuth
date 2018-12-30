import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { database } from './database';
import { optionsCors } from './config/cors';
import route from './routes';

const app = express();
database();

app.use(cors(optionsCors));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log('App is listening on port ' + port));
