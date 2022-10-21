import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

// ----------------------------------------
// props -> App.js로부터 isLoggedIn을 prop으로 전달 받음
const AppRouter = ({ isLoggedIn }) => {
  return (
    <div>
      <Router>
        {/* 사용자가 로그인 되어있을 때만  Navigation 실행*/}
        {isLoggedIn && <Navigation />}
        <Routes>
          {/* 로그인 했으면 홈 화면 보여주고 로그인 안했으면 로그인페이지 보여 준다 */}
          {/* isLoggedIn ? show home :  show loginPage */}
          {/* <> </> -> fragment. 부모 요소가 없을 때 많은 요소들을 render하고 싶은 경우 사용함. (<div>, <span>에도 넣고 싶지 않을 때) */}
          {isLoggedIn ? (
            <>
              {/* Home과 Profile 의 경로 설정. */}
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              {/* Auth의 경로 설정 */}
              <Route path="/" element={<Auth />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
