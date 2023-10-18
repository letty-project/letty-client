import Header from "../components/Header";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-white bg-gradient-to-t from-[#15A09166] via-[#15A09166] to-white">
      <Header />
      <div>
        <div>로고</div>
        <div className="text-primary-dark">레티의 구독 서비스</div>
        <div className="text-primary-default">
          레티가 구독하고 싶은 사람에게 보내줘요
        </div>
      </div>
      <div>
        <div className="text-primary-default">
          ___ 님이 ___님의 포스팅을 구독합니다.
        </div>
        <div>
          <input placeholder="Email Address" />
          <button type="submit" className="bg-primary-default">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
