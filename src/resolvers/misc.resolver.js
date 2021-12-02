// vendor
// import axios from 'axios';

const roles = async () => {
  // const response = await axios.get('http://localhost:8080/roles');

  return [
    {
      code: 'ADMIN',
      value: 'Administrador',
    },
    {
      code: 'LEADER',
      value: 'Líder',
    },
    {
      code: 'STUDENT',
      value: 'Estudiante',
    }
  ];
};

export default {
  miscQueries: {
    roles,
  }
}