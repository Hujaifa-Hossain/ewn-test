import { useContext, useState } from "react";
import { FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Login = ({ setIndex }) => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          toast.success(`hello ${user?.displayName}`);
        } else {
          toast.error("Please verify email & login.", {
            duration: 4000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="error-text">{error}</p>}
        <h2>Log In</h2>

        <div className="inputBox">
          <input name="email" type="email" placeholder="your email" autoComplete="username" required />
          <HiOutlineMail className="icon" />
        </div>

        <div className="inputBox">
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="your password"
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="inputBox">
          <input type="submit" value="Log In" onClick={() => setIndex(2)}/>
        </div>

        <p className="reset-link" onClick={() => setIndex(2)}>Forgot password ?</p>
        <p>
          Not registered ?
          <span onClick={() => setIndex(0)}> Create an account</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
