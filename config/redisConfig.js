import redis from 'redis';

const client = redis.createClient({
  url: 'redis://h:pc17e3a4b43e4c27897f46b6dd2d5596c7d063da822ae7b403942ea26f9bccf0c@ec2-18-232-45-80.compute-1.amazonaws.com:18029'
});
console.log(client);
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
