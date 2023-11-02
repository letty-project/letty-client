import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import home from "../assets/home.svg";
import person from "../assets/person.svg";

const Mailing = () => {
  return (
    <div className="flex flex-row">
      <div className="flex ">
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full">
          <img className="" src={home} alt="home" />
          메인 페이지
        </button>
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full">
          <img className="" src={person} alt="person" />
          구독자 관리
        </button>
      </div>
      <div>
        <div className="flex flex-col justify-around w-[30rem] h-[10rem] bg-primary-default border-0 ">
          <div className="text-white">현재 이 주소로 되어있어요</div>
          <div className="flex flex-row justify-between h-8">
            <input className="w-3/4"/>
            <button className="btn bg-white text-primary-light  border-0  font-semibold text-base ">
              완료
            </button>
          </div>
        </div>
        <div >
          <div className="flex flex-row justify-between">
            <div>메일 쓰기</div>
            <div>
              <input id="send-all-button" type="checkbox" />
              <label htmlFor="send-all-button">전체 보내기</label>
            </div>
            </div>
          </div>
        <div>
          받는 사람 <input /> <button className="btn bg-white text-primary-light  border-0  font-semibold text-base ">주소록</button>
          <button className="btn bg-primary-default text-primary-light  border-0  font-semibold text-base ">보내기</button>
        </div>
        <ReactQuill className="bg-white" theme="snow" />
      </div>
    </div>
  );
};

export default Mailing;
