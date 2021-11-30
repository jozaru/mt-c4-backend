import userSchema from "./user.schema.js";
import projectSchema from "./project.schema.js";
import enrollmentSchema from "./enrollment.schema.js";
import miscSchema from "./misc.schema.js";

export default [
  ...userSchema,
  ...projectSchema,
  ...enrollmentSchema,
  ...miscSchema,
]