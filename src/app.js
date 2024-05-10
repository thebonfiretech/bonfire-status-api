import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import log from 'gulog';
import cors from 'cors';

import apiLimiter from './middlewares/apiLimiter.js';
import connectDB from './database/connect.js';
import { router } from './routes/index.js';
import Crons from './middlewares/crons.js';
import config from './config/default.js';
import handleRequest from './util/handleRequest.js';
import Errors from './util/error.js';

const { sendError } = new Errors();
export { sendError, handleRequest };
export const app = express();
connectDB();

const crons = new Crons();

if (config.logRequestInformations) app.use(morgan('dev'));

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use('/v1', [apiLimiter], router);

app.use((err, req, res, next) => {
  log.error(`An error ocurred at route: general route`);
  console.log(err);
  return sendError(res, 'internal_error', {
    logger: false
  });
});

app.listen(config.port, () => {
  
});


setInterval(() => {
  crons.getAllPing();
}, 60000*5)