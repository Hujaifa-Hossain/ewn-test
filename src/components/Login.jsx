import { FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Login = () => {
  return (
    <div className="container">
      <form className="form signUp">
        <h2>Sign In</h2>
        <div className="inputBox">
          <input type="email" required />
          <HiOutlineMail className="icon"/>
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <FaLock className="icon"/>
          <span>Password</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Log In" />
        </div>
        <p>
          Not registered ?<a href="#"> Create an account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
