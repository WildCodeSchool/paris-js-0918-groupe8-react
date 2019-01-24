/* global localStorage */
import axios from 'axios';

const protectedRoute = (props) => {
  const { history } = props;
  const token = localStorage.getItem('token');
  console.log('token', token);
  axios({
    method: 'POST',
    url: '/api/login/protected',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .catch(() => history.replace('/admin-login'));
};

export default { protectedRoute };
