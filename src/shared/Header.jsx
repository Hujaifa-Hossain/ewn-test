import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(() => {toast.success('Successfully logged out!')})
      .catch((error) => toast.error(error));
  };
  return (
    <header>
      {user && (
        <div className="header">
          <p>Hello {user.displayName}</p>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
