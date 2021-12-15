// vendors
import { AuthenticationError } from 'apollo-server';

// models
import Projects from "../models/projects.model.js";
import Users from "../models/users.model.js";
import Enrollements from "../models/enrollments.model.js";

const allProjects = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new Error(errorMessage);
  }
  const projects = await Projects.find();
  return projects;
};

const project = async (parent, args) => {
  const user = await Projects.findById(args._id);
  return user;
};

const leader = async (parent) => {
  const user = await Users.findById(parent.leader_id);
  return user;
};

const enrollments = async (parent) => {
  const enrollments = await Enrollements.find({ project_id: parent._id.toString() });
  return enrollments;
};

const updateProject = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new AuthenticationError(errorMessage);
  }
  const { _id, ...rest } = args.input;
  const today = new Date();
  const startDate = today - today.getTimezoneOffset() * 60000;
  const updatedProject = Projects.findByIdAndUpdate(_id, { ...rest, startDate }, { new: true });
  return updatedProject;
};

export default {
  projectQueries: {
    allProjects,
    project,
  },
  projectMutations: {
    updateProject
  },
  Project: {
    leader,
    enrollments,
  }
};
