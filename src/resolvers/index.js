import userResolver from "./user.resolver.js";
import projectResolver from "./project.resolver.js";
import enrollmentResolver from "./enrollment.resolver.js";

const { userQueries, userMutations, ...userRest } = userResolver;
const { projectQueries, projectMutations, ...projectRest } = projectResolver;
const { enrollmentQueries, enrollmentMutations, ...enrollmentRest} = enrollmentResolver;

export default {
  Query: {
    ...userQueries,
    ...projectQueries,
    ...enrollmentQueries,
  },
  Mutation: {
    ...userMutations,
    ...projectMutations,
    ...enrollmentMutations,
  },
  ...userRest,
  ...projectRest,
  ...enrollmentRest,
};
