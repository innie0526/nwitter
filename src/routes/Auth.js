import React, { useState } from "react";
import { authService } from "fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";
import { GithubAuthProvider } from "@firebase/auth";

// createUserWithEmailAndPassword : 지정된 전자 메일 주소(Email) 및 암호와 연결된 새 사용자 계정을 만듭니다.
// signInWithEmailAndPassword : 이메일과 비밀번호를 사용하여 비동기식으로 로그인합니다.
//  signInWithPopup : 팝업창 띄워서 로그인 구현. provider가 필요함
// GithubAuthProvider,GoogleAuthProvider : github 과 google으로 로그인

// -----------------------------------------------------------------

// 로그인이 되어있지 않으면 Auth 화면을 보여줌.
// 로그인 후에는 Home화면으로 이동

const Auth = () => {
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  // false -> log in 버튼 / true -> Create newAccount 버튼
  // if 계정이 없는데 false 상태에서 로그인하게 되면 400번 err 발생!
  const [error, setError] = useState("");

  // 1. onChange function -> input 값이 바뀔때마다 onChange 함수 사용하게 됨
  //  event = e '무슨 일이 일어났는가?를 뜻함 -> input값이 변경됨
  //  우리는 e 로부터 많은 정보를 받아 올 수 있는데 그 중 하나가 target. 즉 변경이 일어난 부분임
  //  target 안에는 name, value가 들어있음. 여기에서 name은 니꼬가 부여한 것인데 input에 이름을 명명해줬다고 생각하면 편하다.
  //  value는 키보트를 통해 입력된 값을 말하며 우리는 지금 이 value값을 얻어내서 사용하고 싶음
  // 1-1. name = email이라면 state인 email을 변경하게 됨. 그게 아니면 password를 변경. 그리고 나서 value값 이용!
  //  input을 변경할 때마다 state도 바뀌기 때문에 onChange 함수가 사용되고 이 함수는 내가 input에 입력한 value 값들을 저장시킴
  //

  const onChange = (e) => {
    // ※ console.log(e.target.name) 로 콘솔창에 target 에 name이 찍히는 지 확인

    // event로부터 target을 받아 온 후 name, value를 받아 옴
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      // 1-1.
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // preventDefault() -> 기본 행위가 실행되는 걸 원치 않기 때문에 내가 컨트롤 할 수 있게 해주라는 뜻임
  // form을 제출했을 때 newAccount를 사용해서 확인함
  // try..catch -> err발생 시 스크립트가 중단되는 걸 방지하고 err를 잡아서(catch) 더 합당한 무언가를 할 수 있게 함
  //  async, await 사용

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data;
      if (newAccount) {
        // create account
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        //Log in
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // toggleAccount() -> newAccount의 이전 값을 가져와서 그 값에 반대되는 것을 리턴함
  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (e) => {
    // console.log(e.target.name); -> button 클릭 시 콘솔창에 제대로 뜨는 지 확인
    const {
      target: { name },
    } = e;
    let provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
      console.log(provider);
    }

    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <div>
      {/* eventListener. form을 submit 할 때마다 그 event를 가져다가 preventDefault 시켜줌 */}
      <form onSubmit={onSubmit}>
        {/* email ,pswd, submit 입력란 */}
        {/* input태그는 value값을 받아 올 뿐 letter은 추가x -> value값이 없으면 타이핑 자체가 되지 x */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log in"} />
        {/* 화면에 띄우는 에러 */}
        {error}
      </form>
      {/* newAccount이면 Create Account 아니면 Log in 보여 줌 */}
      <span onClick={toggleAccount}>
        {newAccount ? "Create Account" : "Log in"}
      </span>
      <div>
        {/* google, github으로 로그인 기능 구현 */}
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
