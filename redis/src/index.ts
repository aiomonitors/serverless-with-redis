import logger from './utils/logger';
import { Worker, Job, } from 'bullmq';
import ioredis from 'ioredis';

const redisConnection = new ioredis('redis://cache');

logger.info('Starting worker');

new Worker('Hello', async (job) => {
	console.log(job.data);
}, { connection: redisConnection });