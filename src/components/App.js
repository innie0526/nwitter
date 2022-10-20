// App.js는 모든 로직들을 다루고 있음
// ---------------------------------------------------
import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { onAuthStateChanged } from "firebase/auth";
// onAuthStateChanged :사용자의 로그인 상태 변경에 대한 관찰자를 추가한다. 즉 기본적으로는 event listener라는 것이며
//                    유저 상태에 변화가 있을 때 그 변화를 알아차리게 됨. 계정 생성 시에도 trigger 되고 Log-out될 때도 알아차림.
//                    firebase가 초기화 될 때도 실행됨. 로그인 되는 순간도 알아차리게 됨...

// ---------------------------------------------------

const App = () => {
  // init false -> 아직 초기화 되지x
  const [init, setInit] = useState(false);
  // useState의 기본값은 false. 즉 처음엔 로그인 x. Auth화면 <-> true. Home화면
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect 강의 듣기 ...ㅜ
  // 여기서 user의 변화를 listen 해야함 -> 이 때 onAuthStateChanged 를 사용해야함. callback을 user로 필요로 함
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {/* prop을 Router.js로 전달 */}
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; Nwitter {new Date().getFullYear()} </footer>
    </>
  );
};

export default App;
