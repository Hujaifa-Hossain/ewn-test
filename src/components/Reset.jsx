import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Reset = ({ setIndex }) => {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      toast.error("email field cannot be empty!");
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        toast.success("Password Reset email sent. Please check your email.");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="container">
      <form className="form login" onSubmit={handleSubmit}>
        {error && <p className="error-text">{error}</p>}

        <h2>Reset Form</h2>

        <div className="inputBox">
          <input
            onBlur={handleEmailBlur}
            name="email"
            type="email"
            placeholder="your email"
            autoComplete="username"
            required
          />
          <HiOutlineMail className="icon" />
        </div>

        <div className="inputBox">
          <input type="button" value="Reset Now" onClick={handleForgetPassword} />
        </div>

        <p>
          Remembered password ?<span onClick={() => setIndex(1)}> Login</span>
        </p>
        <p>
          New here ?<span onClick={() => setIndex(0)}> Create an account</span>
        </p>
      </form>
    </div>
  );
};

export default Reset;
