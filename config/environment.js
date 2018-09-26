const port = process.env.PORT || 4000 || 3000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost:27017/taco-generator${env}`;
const secret = process.env.SECRET || 'yummy';

module.exports = { port, dbURI, secret, env };
