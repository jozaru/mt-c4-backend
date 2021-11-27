import Projects from "../models/projects.model.js";
import Users from "../models/users.model.js";
import Enrollements from "../models/enrollments.model.js";

const allProjects = async () => {
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

const students = async (parent) => {
  const projectStudents = await Enrollements.find({ project_id: parent._id.toString() });
  return projectStudents;
}

export default {
  projectQueries: {
    allProjects,
    project,
  },
  Project: {
    leader,
    students,
  }
};
