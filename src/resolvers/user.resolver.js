// vendors
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// models
import Users from "../models/users.model.js";

const allUsers = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new Error(errorMessage);
  }
  return await Users.find();
};

const user = async (parent, args, context) => {
  const user = await Users.findById(args._id);
  return user;
};

const register = async (parent, args, context) => {
  const user = new Users({
    ...args.input,
    password: await bcrypt.hash(args.input.password, 12),
  });
  return user.save();
};

const userByEmail = async (parent, args, context) => {
  const user = await Users.findOne({ email: args.email });
  return user;
};

const login = async (parent, args) => {
  const user = await Users.findOne({ email: args.email });
  const { password, _id, email } = user;
  if (!user) {
    throw new Error('User not found');
  }
  const isValid = await bcrypt.compare(args.password, password);
  if(!isValid) {
    throw new Error('Wrong password');
  }
  const token = await jwt.sign(
    { userId: _id },
    process.env.SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

export default {
  userQueries: {
    allUsers,
    user,
    userByEmail
  },
  userMutations: {
    register,
    login,
  },
}