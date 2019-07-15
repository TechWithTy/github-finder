import PropTypes from 'prop-types';
import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: '60px', margin: 'auto' }}
        alt="Avatar "
      />
      <h3>{login}</h3>
      <div className="div">
        <Link href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
