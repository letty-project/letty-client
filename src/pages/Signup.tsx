import { useState } from 'react';
import Card from '../components/Card';
import DottedLine from '../assets/dotted-line.svg';
import { useNavigate, useParams } from 'react-router-dom';
import SuccessIcon from '../assets/success-icon.svg';

const Signup = () => {
  const { step } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = (params: string) => {
    navigate(`/signup/${params}`);
  };

  const PrivacyPolicy = () => {
    return (
      <div className="font-sans text-xs  pb-4">
        <p className="font-bold text-sm mb-4">개인정보처리방침</p>
        <ol className="list-decimal ml-4">
          <li>
            <div>개인 정보의 수집 및 이용 목적</div>
            <div>
              서비스 제공자 Letty(이하 “레티”)는 다음과 같은 목적으로 사용자의
              개인 정보를 수집 및 활용합니다.
            </div>
          </li>
          <li>
            <ul className="list-decimal pl-4">
              <li>
                회원관리 - 사용자의 식별 및 불량 회원의 부정 이용 방지와 비인가
                사용방지, 가입의사 확인, 분쟁 조정을 위한 기록 보존, 불만 처리
                등 민원처리, 공지사항 전달
              </li>
              <li>서비스 제공 - 신규 서비스 개발 및 마케팅 및 광고에 활용</li>
            </ul>
          </li>
          <li>
            <div>개인 정보의 보유 및 이용기간</div>
            <ul className="list-decimal pl-4">
              <li>
                <div>사용자의 불만 및 분쟁</div>
                <div>
                  보존 이유: 전자상거래 등에서 소비자 보호에 관한 법률 제6조 및
                  시행령 제 6조
                </div>
                <div>보존 기간: 3년</div>
              </li>
              <li>
                <div>접속에 관한 기록</div>
                <div>보존 이유: 통신비밀보호법 제15조 2항 및 시행령 제41조</div>
                <div>보존 기간: 3개월</div>
              </li>
            </ul>
          </li>
          <li>
            <div>수집하는 개인 정보의 항목</div>
            <ul className="list-decimal pl-4">
              <li>사용자 입력 (회원 가입)</li>
              <ul className="list-decimal pl-6">
                <li>이메일 또는 소셜 미디어 서비스 ID: 사용자 구분</li>
                <li>회원 유형</li>
                <li>닉네임</li>
                <li>프로필 사진</li>
              </ul>
              <li>자동 수집 항목 (홈페이지 접속)</li>
              <ul className="list-decimal pl-6">
                <li>IP</li>
                <li>이용 기록</li>
                <li>접속 기록</li>
                <li>쿠키 등</li>
              </ul>
            </ul>
          </li>
          <li>
            <div>개인 정보의 파기 절차</div>
            <div>
              사용자가 서비스 이용 거부(회원 탈퇴)시 레티는 7일 이내 사용자를
              구분 할 수 있는 모든 데이터를 지체 없이 파기 합니다. 파기 절차가
              진행되면서 사용자가 작성한 게시글, 댓글 및 북마크 등이 모두
              삭제됩니다.
            </div>
            <div>
              또한 서비스 운영자에게 이메일 (project@letty.day)에게 이메일을
              사용하여 파기 요청을 할 수 있습니다. 회원의 개인정보는 수집 및
              이용목적이 달성되거나 고지한 보유기간이 경과된 후 지체 없이
              파기됩니다.
            </div>
            <div>
              종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여
              파기하고, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수
              없는 기술적인 방법을 사용하여 파기합니다.
            </div>
          </li>
          <li>
            <div>개인정보 제공</div>
            <ul className="list-decimal pl-4">
              <li>
                사용자가 대한민국 법령에 의거하거나 위배하는 행위를 하여 수사
                목적으로 요구되는 경우
              </li>
              <li>사용자가 사전에 동의하는 경우</li>
            </ul>
          </li>
          <li>
            <div>개인 정보의 안정성 및 확보 조치</div>
            <ul className="list-decimal pl-4">
              <li>개인정보 암호화</li>
              <li>취급자 최소화 및 교육</li>
            </ul>
          </li>
          <li>
            <div>개인 정보 관리 및 책임자</div>
            <div>
              이메일:{' '}
              <a
                href="mailto:project@letty.day"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                project@letty.day
              </a>
            </div>
            <div>
              기타 개인 정보 침해에 대한 신고나 상담이 필요한 경우에는 아래
              회사에 문의 하시길 바랍니다.
            </div>
            <div>
              개인정보침해신고센터(
              <a
                href="https://www.118.or.kr"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.118.or.kr
              </a>{' '}
              / 118)
            </div>
          </li>
          <li>
            <div>개인 정보 취급 방침에 따른 사항</div>
            <div>
              이 개인 정보 취급 방침은 2023년 12월 25일 부터 적용됩니다.
            </div>
          </li>
        </ol>
      </div>
    );
  };

  const SignupTerms = () => {
    return (
      <>
        <span className="label-text text-base text-[#15A091] font-semibold self-start">
          [필수] 개인정보 수집 및 이용
        </span>
        <div className="border-[#15A091] border-[1px] w-full rounded-[10px] overflow-y-scroll h-[250px] p-4 custom-scrollbar">
          <p className="h-full  text-justify whitespace-pre-line">
            {<PrivacyPolicy />}
          </p>
        </div>
        <label className="self-end flex items-center">
          <span className="label-text text-base text-[#15A091] font-semibold mr-2">
            개인정보 수집 동의하기
          </span>

          <input
            id="send-all-button"
            type="checkbox"
            className="checkbox 
                  rounded-md border-2 checkbox-primary mr-3"
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

  const SignupCredentials = () => {
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
              onClick={() => navigate(-1)}
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

  const SignupSuccess = () => {
    return (
      <>
        <div className="flex flex-col items-center -mt-32">
          <img
            src={SuccessIcon}
            className="h-[102px] w-[102px]"
            alt="Success Icon"
          />
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

  const STEP_COMPONENTS = {
    terms: SignupTerms,
    credentials: SignupCredentials,
    success: SignupSuccess,
  };

  const ActiveComponent = STEP_COMPONENTS[step as keyof typeof STEP_COMPONENTS];

  return (
    <>
      <Card>{ActiveComponent()}</Card>
      <img
        className="fixed left-4 bottom-0"
        src={DottedLine}
        alt="Dotted Line"
      />
    </>
  );
};

export default Signup;
