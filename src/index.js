// @ts-check
import fastify from 'fastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = fastify({
  exposeHeadRoutes: false,
  logger: { target: 'pino-pretty' },
});

export default app;
