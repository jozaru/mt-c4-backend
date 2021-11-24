import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  documentId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  fullName: {
    type: String,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'LEADER', 'STUDENT']
  },
  status: {
    type: String,
    enum: ['PENDING', 'AUTHORIZED', 'UNAUTHORIZED']
  },
  password: {
    type: String,
  }
}, { versionKey: false });

const Users = new mongoose.model('users', usersSchema);

export default Users;
