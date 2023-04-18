import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { FaRegUser, FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AuthContext } from "../context/AuthProvider";

const Register = ({ setIndex }) => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name);
        handleEmailVerification();
        toast.success("Hurray! signed up! Please verify email & login.", {
          duration: 4000,
        });
      })
      .catch((e) => {
        setError(e.message);
        toast.error(e.message);
      });
  };

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => toast.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => toast.error(error));
  };

  return (
    <div className="container">
      <form className="form signUp" onSubmit={handleSubmit}>
        {error && <p className="error-text">{error}</p>}
        <h2>Sign Up</h2>

        <div className="inputBox">
          <input name="name" type="text" placeholder="your username" required />
          <FaRegUser className="icon" />
        </div>

        <div className="inputBox">
          <input name="email" type="email" placeholder="your email" required />
          <HiOutlineMail className="icon" />
        </div>

        <div className="inputBox">
          <input
            name="password"
            type="password"
            placeholder="your password"
            required
          />
          <FaLock className="icon" />
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
