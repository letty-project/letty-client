import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import home from "../assets/home.svg";
import person from "../assets/person.svg";

const Mailing = () => {
  return (
    <div className="flex flex-row h-full bg-white">
      <div className="h-full flex flex-col px-5 w-1/6  border-r-2">
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full">
          <img className="" src={home} alt="home" />
          메인 페이지
        </button>
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full">
          <img className="" src={person} alt="person" />
          구독자 관리
        </button>
      </div>
      <div className="flex justify-center items-center w-5/6 px-10">
      <div className="flex flex-col w-full h-full">
        <div>양수빈 님 안녕하세요!</div>
        <div className="rounded-lg flex flex-col justify-around w-full h-[10rem] bg-primary-default border-0 ">
          <div className="text-white">현재 이 주소로 되어있어요</div>
          <div className="flex flex-row justify-between h-8">
            <input className="w-3/4 rounded-3xl" placeholder="https://y-oz6.tistory.com/"/>
            <button className="btn bg-white text-primary-light  border-0  font-semibold text-base ">
              완료
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div>메일 쓰기</div>
            <div>
              <input id="send-all-button" type="checkbox" />
              <label htmlFor="send-all-button">전체 보내기</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="sender">받는 사람</label>
          <input id="sender" className="rounded-3xl" placeholder="yangsubin@gmail.com"/>
          <button className="btn bg-white text-primary-light  border-0  font-semibold text-base ">
            주소록
          </button>
          <button className="btn bg-primary-default text-primary-light  border-0  font-semibold text-base ">
            보내기
          </button>
        </div>
        <ReactQuill className="bg-white" theme="snow" />
      </div>
      </div>
    </div>
  );
};

export default Mailing;
