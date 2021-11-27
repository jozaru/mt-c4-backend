import userSchema from "./user.schema.js";
import projectSchema from "./project.schema.js";
import enrollmentSchema from "./enrollment.schema.js";

export default [
  ...userSchema,
  ...projectSchema,
  ...enrollmentSchema,
]