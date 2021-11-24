import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  generalObjective: {
    type: String,
    required: true,
  },
  specificObjectives: {
    type: [],
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  leader_id: {
    type: Schema.ObjectId,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  phase: {
    type: String
  }
});

const Projects = new mongoose.model('projects', projectsSchema);

export default Projects;