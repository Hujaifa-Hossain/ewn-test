import Login from '../components/Login';
import Register from '../components/Register';

const Auth = () => {
  return (
    <div className='auth'>
      <Register/>
      <Login/>
    </div>
  );
};

export default Auth;