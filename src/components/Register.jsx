import { FaRegUser, FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Register = ({setIndex}) => {
  return (
    <div className="container">
      <form className="form signUp">
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input type="text" required />
          <FaRegUser className="icon"/>
          <span>Username</span>
        </div>
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
          <input type="submit" value="Create Account" />
        </div>
        <p>
          Already a member ?<span onClick={() => setIndex(1)}> Log in</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
