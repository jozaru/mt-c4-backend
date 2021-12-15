// vendors
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthenticationError, ForbiddenError } from 'apollo-server';

// constants
import { USER_STATUS, ROLES } from '../constants/user.constants.js';

// models
import Users from "../models/users.model.js";
import Enrollements from '../models/enrollments.model.js';

const allUsers = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new AuthenticationError(errorMessage);
  }
  if(user.role !== ROLES.ADMIN) {
    throw new ForbiddenError('No access');
  }
  return await Users.find();
};

const user = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new Error(errorMessage);
  }
  return user;
};

const register = async (parent, args) => {
  const user = new Users({
    ...args.input,
    status: USER_STATUS.PENDING,
    fullName: `${args.input.name} ${args.input.lastName}`,
    password: await bcrypt.hash(args.input.password, 12),
  });
  return user.save();
};

const userByEmail = async (parent, args) => {
  const user = await Users.findOne({ email: args.email });
  return user;
};

const login = async (parent, args) => {
  const user = await Users.findOne({ email: args.email });
  const { fullName, role, email } = user;
  if (!user) {
    throw new Error('User not found');
  }
  const isValid = await bcrypt.compare(args.password, user.password);
  if(!isValid) {
    throw new Error('Wrong password');
  }
  const token = await jwt.sign(
    { user: {
      fullName,
      role,
      email,
    } },
    // eslint-disable-next-line no-undef
    process.env.SECRET,
    { expiresIn: '15m' }
  );
  return token;
};

const enrollments = async (parent) => {
  const enrollments = await Enrollements.find({ user_id: parent._id });
  return enrollments;
};

const updateUser = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new AuthenticationError(errorMessage);
  }
  const updatedUser = Users.findOneAndUpdate({ email: user.email }, { ...args.input }, { new: true });
  return updatedUser;
};

const refreshToken = async (parent, args,) => {
  const user = await Users.findOne({ email: args.email });
  const { fullName, role, email } = user;
  const token = await jwt.sign(
    { user: {
      fullName,
      role,
      email,
    } },
    // eslint-disable-next-line no-undef
    process.env.SECRET,
    { expiresIn: '1m' }
  );
  return token;
}

export default {
  userQueries: {
    allUsers,
    user,
    userByEmail,
    refreshToken,
  },
  userMutations: {
    register,
    login,
    updateUser,
  },
  User: {
    enrollments,
  }
}