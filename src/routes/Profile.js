import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";
// -------------------------------------------------------

// My Profile. 프로필 설정 가능

const Profile = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };

  return (
    <>
      <h1>Profile</h1>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
