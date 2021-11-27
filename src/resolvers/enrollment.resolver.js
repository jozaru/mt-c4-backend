// models
import Projects from '../models/projects.model.js';
import Users from '../models/users.model.js';

const project = async (parent) => {
  const project = await Projects.findById(parent.project_id);
  return project;
};

const student = async (parent) => {
  const student = await Users.findById(parent.user_id);
  return student;
};

export default {
  Enrollment: {
    project,
    student,
  }
}