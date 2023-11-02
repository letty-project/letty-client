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
        <div className="w-[30rem] h-[10rem] bg-primary-default border ">
          <div className="text-white">현재 이 주소로 되어있어요</div>
          <div className="flex flex-row">
            <input />
            <button className="btn bg-white text-primary-light my-[10px] border-0  font-semibold text-base w-full">
              완료
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>메일 쓰기</div>
          <label htmlFor="send-all-button">전체 보내기</label>
          <input id="send-all-button" type="checkbox" />
        </div>
        <div>
          받는 사람 <input /> <button>주소록</button>
          <button>보내기</button>
        </div>
        <ReactQuill className="bg-white" theme="snow" />
      </div>
    </div>
  );
};

export default Mailing;
