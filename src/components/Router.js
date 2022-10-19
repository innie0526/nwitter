import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          {isLoggedIn ? (
            <Route></Route>
          ) : (
            <Route>
              <Auth />
            </Route>
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
