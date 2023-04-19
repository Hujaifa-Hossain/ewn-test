import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Successfully logged out!');
      })
      .catch((error) => toast.error(error));
  };

  return (
    <header>
      {user && (
        <div className="header">
          <p>Hello {user.displayName}</p>
          <button type="button" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
