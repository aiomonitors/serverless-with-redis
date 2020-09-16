import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { Queue, } from 'bullmq';
import ioredis from 'ioredis';

const connection = new ioredis('REDIS_URL');
const HelloQueue = new Queue('Hello', { connection });

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  HelloQueue.add('hi', {
    hello: 'hi'
  })
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}
