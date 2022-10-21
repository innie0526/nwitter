import React from "react";
import { Link } from "react-router-dom";
// home으로 가는 링크, 유저 profile로 가는 링크

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
