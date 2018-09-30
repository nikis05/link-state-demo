import React from 'react';

const UserButton = ({ user, setDisplayUserId }) => (
  // eslint-disable-next-line
  <a
    href="#"
    onClick={e => {
      e.preventDefault();
      setDisplayUserId(user.id);
    }}
  >
    {user.name}
  </a>
);

export default UserButton;
