import express, { Request, Response, Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import bodyParser = require('body-parser');
import cors from 'cors';
import router from './routes/index';
import { connect } from './db';

const app: Application = express();
const port = process.env.PORT || 8000;

dotenv.config();

connect();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

app.use('/', router);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Inventory Api!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});