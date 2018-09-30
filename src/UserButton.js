import React from 'react';

export default ({ user, setDisplayUserId }) => (
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
