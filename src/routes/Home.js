import React from "react";
// ------------------------------------------------------

// 로그인이 되면 Home화면이 뜸 -트윗 작성 및 게시, 화면 구현

const Home = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* tweet용 form */}
      <form>
        <input
          type="text"
          placeholder="지금 무슨 생각하고 있어?"
          maxLength={200}
          // width="200px"
          // height="100px"
        />
        <input type="submit" value="Nweet" onSubmit={onSubmit} />
      </form>
    </div>
  );
};

export default Home;
