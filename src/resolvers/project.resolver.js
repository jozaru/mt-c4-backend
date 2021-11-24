import Projects from "../models/projects.model.js";
import Users from "../models/users.model.js";

const allProjects = async () => {
  const projects = await Projects.find();
  return projects;
};

const project = async (parent, args, context, info) => {
  const user = await Projects.findById(args._id);
  return user;
};

const leader = async (parent, args, context, info) => {
  const user = await Users.findById(parent.leader_id);
  return user;
};

export default {
  Query: {
    allProjects,
    project,
  },
  Project: {
    leader,
  }
};
