// vendor
import axios from 'axios';

const roles = async () => {
  const response = await axios.get('http://localhost:8080/roles');
  return response.data;
};

export default {
  miscQueries: {
    roles,
  }
}