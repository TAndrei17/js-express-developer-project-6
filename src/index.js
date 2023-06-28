// @ts-check

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

require('dotenv').config();

const fastify = require('fastify')({
  // @ts-ignore
  exposeHeadRoutes: false,
  // @ts-ignore
  logger: { target: 'pino-pretty' },
});

export default fastify;
