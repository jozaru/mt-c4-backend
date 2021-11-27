import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  documentId: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'LEADER', 'STUDENT'],
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'AUTHORIZED', 'UNAUTHORIZED'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { versionKey: false });

const Users = new mongoose.model('users', usersSchema);

export default Users;
