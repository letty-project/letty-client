import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import home from '../assets/home.svg';
import person from '../assets/person.svg';
import CheckIcon from '../components/icon/CheckIcon';
import AirplaneIcon from '../components/icon/AirplaneIcon';

const Mailing = () => {
  return (
    <div className="flex flex-row h-full w-screen bg-white">
      <div className="h-full flex flex-col px-5 w-1/6  border-r-2 pt-12">
        <button className="text-[16px] btn  h-[65px] bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base">
          <img className="" src={home} alt="home" />
          메인 페이지
        </button>
        <button className="text-[16px] btn  h-[65px]  bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base">
          <img className="" src={person} alt="person" />
          구독자 관리
        </button>
      </div>
      <div className="flex justify-center items-center w-screen">
        <div className="flex flex-col h-full w-[1100px]">
          <div className="flex flex-row items-center">
            <div className="font-black text-[30px] mr-3">
              양수빈 님 안녕하세요!
            </div>
            <CheckIcon width="30px" height="30px" fill="#15A091" />
          </div>
          <div className="rounded-lg flex flex-col w-full p-7 bg-primary-default border-0 h-1/4 my-5">
            <div className="flex flex-row">
              <div className="text-white text-[28px] font-bold mr-3">
                현재 이 주소로 되어있어요.
              </div>
              <div className="flex flex-row justify-center items-center">
                <AirplaneIcon width="30px" height="30px" fill="white" />
              </div>
            </div>
            <div className="flex flex-row justify-between pt-5">
              <input
                className="w-5/6 rounded-2xl h-11 px-5"
                placeholder="https://y-oz6.tistory.com/"
              />
              <button className="btn w-[110px] ml-8 bg-white text-primary-light  border-0  font-semibold text-base ">
                완료
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center justify-between ">
              <div className=" text-primary-default text-[34px] font-black mr-3 my-3">
                메일쓰기
              </div>
              <div className="flex flex-row justify-center items-center">
                <input
                  id="send-all-button"
                  type="checkbox"
                  className="checkbox checkbox-primary border-[2px] rounded-md width-5 height-5 mr-2"
                />
                <label htmlFor="send-all-button">전체 보내기</label>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="text-[18px]" htmlFor="sender">
              받는 사람
            </label>
            <input
              id="sender"
              className="rounded-3xl border-2 border-primary w-2/3 h-10 px-5"
              placeholder="yangsubin@gmail.com"
            />
            <div className="flex flex-row">
              <button className="btn w-[100px] text-[16px] bg-white text-primary-light  border-0  font-semibold text-base ">
                주소록
              </button>
              <button className="btn w-[100px] text-[16px] bg-primary-default text-primary-light  border-0  font-semibold text-base ">
                보내기
              </button>
            </div>
          </div>
          <ReactQuill
            className="bg-white my-2 h-[200px] mt-[10px] "
            theme="snow"
          />
        </div>
      </div>
    </div>
  );
};

export default Mailing;
