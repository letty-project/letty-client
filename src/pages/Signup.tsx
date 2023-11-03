import { useState } from 'react';
import { Card } from '../components/Card';
import DottedLine from '../assets/dotted-line.svg';
import { useNavigate, useParams } from 'react-router-dom';
import SuccessIcon from '../assets/success-icon.svg';

function Signup() {
  const { step } = useParams();
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const handleButtonClick = (params: string) => {
    navigate(`/signup/${params}`);
  };

  const SignupTerms = () => {
    return (
      <>
        <span className="label-text text-base text-[#15A091] font-semibold self-start">
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
        <label className="self-end">
          <span className="label-text text-base text-[#15A091] font-semibold mr-2">
            개인정보 수집 동의하기
          </span>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </label>

        <button
          className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full"
          onClick={() => handleButtonClick('credentials')}
        >
          다음
        </button>
      </>
    );
  };

  const SignupCredentialsComponent = () => {
    return (
      <>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-base text-[#15A091] font-semibold self-start">
              닉네임
            </span>
          </label>
          <input
            type="text"
            placeholder="2글자 이상"
            className="input input-bordered w-full bg-[#F6F6F6] font-semibold"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-base text-[#15A091] font-semibold self-start">
              이메일 주소
            </span>
          </label>
          <div className="flex items-center -my-3">
            <input
              type="text"
              placeholder="yangsubindev@gmail.com"
              className="input input-bordered w-full bg-[#F6F6F6] font-semibold"
            />
            <button
              className="btn border-[#15A091] border-[1px] bg-white my-[10px] text-black font-semibold text-base w-1/3 ml-3"
              onClick={() => handleButtonClick('success')}
            >
              이전
            </button>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-base text-[#15A091] font-semibold self-start">
              비밀번호
            </span>
          </label>
          <input
            type="text"
            placeholder="6글자 이상"
            className="input input-bordered w-full bg-[#F6F6F6] font-semibold"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-base text-[#15A091] font-semibold self-start">
              비밀번호 확인
            </span>
          </label>
          <input
            type="text"
            placeholder="6글자 이상"
            className="input input-bordered w-full bg-[#F6F6F6] font-semibold"
          />
        </div>

        <div className="flex w-full">
          <button
            className="btn border-[#15A091] border-[1px] bg-white my-[10px] text-black font-semibold text-base w-1/3 mr-3"
            onClick={() => handleButtonClick('success')}
          >
            이전
          </button>
          <button
            className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-2/3 flex-shrink"
            onClick={() => handleButtonClick('success')}
          >
            가입하기
          </button>
        </div>
      </>
    );
  };

  const SignupSuccessComponent = () => {
    return (
      <>
        <div className="flex flex-col items-center -mt-32">
          <img src={SuccessIcon} className="h-[102px] w-[102px]" alt="Success Icon" />
          <h1 className="text-center text-[#15A091] font-bold text-4xl">
            회원가입이
            <br />
            완료 되었어요!
          </h1>
        </div>

        <div className="flex w-full shrink">
          <div className="flex flex-col w-1/2 items-center shrink">
            <p className="mb-2">작가님 글을 보고싶어요!</p>
            <button className="btn border-[#15A091] text-[#15A091] border-[1px] bg-white my-[10px] font-semibold text-base w-full mr-4">
              구독자 페이지로 가기
            </button>
          </div>
          <div className="flex flex-col w-1/2 items-center shrink">
            <p className="mb-2">구독자들을 보고싶어요!</p>
            <button className="btn border-[#15A091] text-[#15A091] border-[1px] bg-white my-[10px] font-semibold text-base w-full">
              작가 페이지로 가기
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Card>
        {step === 'terms' && <SignupTerms />}
        {step === 'credentials' && <SignupCredentialsComponent />}
        {step === 'success' && <SignupSuccessComponent />}
      </Card>
      <img className="fixed left-4 bottom-0" src={DottedLine} alt="Dotted Line" />
    </>
  );
}

export default Signup;
