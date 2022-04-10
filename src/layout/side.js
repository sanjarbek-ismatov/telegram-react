import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import users from '../json/users';

function Side() {
  return (
    <div className="main-side">
      <div className="header-side">
        <FontAwesomeIcon icon={faBars} />
        <div className="input">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Qidiruv" />
        </div>
      </div>

      <div className="content-side">
        {users.map((user) => {
          return (
            <div className="contact">
              <img src={user.image} />
              <div className="user-message">
                <h3>{user.name}</h3>
                <p>{user.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Side;
