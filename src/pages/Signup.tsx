import { Card } from '../components/Card';
import DottedLine from '../assets/dotted-line.svg';

function Signup() {
  return (
    <>
      <Card>
        <span className="label-text ml-[10px] text-base text-[#15A091] font-semibold">
          [필수] 개인정보 수집 및 이용
        </span>
        <div className="border-[#15A091] border-[1px] w-full rounded-[10px] overflow-y-scroll h-[250px] p-4 custom-scrollbar">
          <p className="h-[900px]">
            여기에 이용약관 내용을 넣으세요... 여기에 이용약관 내용을 넣으세요...여기에
            이용약관 내용을 넣으세요...여기에 이용약관 내용을 넣으세요...여기에 이용약관
            내용을 넣으세요...여기에 이용약관 내용을 넣으세요...여기에 이용약관 내용을
            넣으세요...
          </p>
        </div>
        <label>
          <span className="label-text ml-[10px] text-base text-[#15A091] font-semibold">
            개인정보 수집 동의하기
          </span>
          <input type="checkbox" checked="true" />
        </label>
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full">
          다음
        </button>
      </Card>
      <img className="fixed left-4 bottom-0" src={DottedLine} alt="Dotted Line" />
    </>
  );
}

export default Signup;
