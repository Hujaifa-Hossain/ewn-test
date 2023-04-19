import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Reset from "../components/Reset";

const Auth = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="auth-box">
      <div className="tabs">
        <div
          className={`tab-head ${index === 0 ? "active" : null}`}
          onClick={() => setIndex(0)}
        >
          Sign Up
        </div>
        <div
          className={`tab-head ${index === 1 ? "active" : null}`}
          onClick={() => setIndex(1)}
        >
          Log In
        </div>
        <div
          className={`tab-head ${index === 2 ? "active" : null}`}
          onClick={() => setIndex(2)}
        >
          Reset
        </div>
      </div>
      <div className="auth">
        <div  hidden={index !== 0}>
          <Register setIndex={setIndex}/>
        </div>

        <div hidden={index !== 1}>
          <Login setIndex={setIndex}/>
        </div>

        <div hidden={index !== 2}>
          <Reset setIndex={setIndex}/>
        </div>
      </div>
    </div>
  );
};

export default Auth;
