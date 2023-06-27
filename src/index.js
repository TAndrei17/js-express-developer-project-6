// @ts-check
import 'dotenv/config';
import fastify from 'fastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

require('dotenv').config();

const app = fastify({
  exposeHeadRoutes: false,
  // @ts-ignore
  logger: { target: 'pino-pretty' },
});

export default app;
