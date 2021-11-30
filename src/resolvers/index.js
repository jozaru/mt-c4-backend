import userResolver from "./user.resolver.js";
import projectResolver from "./project.resolver.js";
import enrollmentResolver from "./enrollment.resolver.js";
import miscResolver from "./misc.resolver.js";

const { userQueries, userMutations, ...userRest } = userResolver;
const { projectQueries, projectMutations, ...projectRest } = projectResolver;
const { enrollmentQueries, enrollmentMutations, ...enrollmentRest} = enrollmentResolver;
const { miscQueries, miscMutations, ...miscRest} = miscResolver;

export default {
  Query: {
    ...userQueries,
    ...projectQueries,
    ...enrollmentQueries,
    ...miscQueries,
  },
  Mutation: {
    ...userMutations,
    ...projectMutations,
    ...enrollmentMutations,
    ...miscMutations,
  },
  ...userRest,
  ...projectRest,
  ...enrollmentRest,
  ...miscRest,
};
