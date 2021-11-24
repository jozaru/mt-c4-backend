import mongoose from 'mongoose';

const connect = () => mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err));

export default connect;
