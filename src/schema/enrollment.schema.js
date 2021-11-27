import { gql } from 'apollo-server';

const enrollmentType = gql`
  # Enrollment
  type Enrollment {
    status: EnrollmentStatus
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

export default [
  enrollmentType,
  enums,
];
