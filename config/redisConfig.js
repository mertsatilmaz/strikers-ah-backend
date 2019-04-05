import redis from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const client = redis.createClient({
  url: process.env.REDISURL
});
client.on('connect', (error) => {
  if (error) {
    console.log(error);
  }
  console.log('redis connected successfully');
});
client.on('error', (error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});

export default client;
