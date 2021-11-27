import { gql } from 'apollo-server';

const enrollmentType = gql`
  # Enrollment
  type Enrollment {
    status: EnrollmentStatus
    enrollmentDate: String
    egresDate: String
    project: Project!
    student: User!
  }
`;

const enums = gql`
  # Enum for status values
  enum EnrollmentStatus {
    ACEPTED
    REJECTED
  }
`;

const queries = gql`
  # Query all enrollments
  type Query {
    allEnrollments: [Enrollment]
  }
`;

export default [
  enrollmentType,
  enums,
  queries,
];
