import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import DottedLine from 'src/assets/dotted-line.svg';
import Logo from '../assets/letty-icon.svg';
import GoogleIcon from 'src/assets/google-icon.svg';

function Login() {
  return (
    <>
      <Card>
        <input
          type="text"
          placeholder="닉네임 또는 이메일"
          className="input input-bordered w-full bg-[#F6F6F6] font-semibold"
        />
        <input
          type="text"
          placeholder="비밀번호"
          className="input input-bordered w-full   bg-[#F6F6F6] font-semibold"
        />
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full">
          로그인
        </button>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-accent"
            />
            <label className="label-text ml-[10px] text-base text-black font-normal">
              로그인 상태 유지하기
            </label>
          </div>
          <div className="flex items-center">
            <span className="label-text text-base mr-[10px] font-semibold">
              이메일 찾기
            </span>
            <span className="label-text text-base font-semibold">
              비밀번호 찾기
            </span>
          </div>
        </div>

        <div className="divider font-[#AAA] font-bold">또는</div>
        <button className="btn bg-white w-full text-[#373737] flex justify-between">
          <img src={GoogleIcon} alt="google Icon" />
          <span className="text-[#8C8C8C] font-semibold text-lg">
            구글 계정으로 로그인
          </span>
          <div className="w-[43px]"></div>
        </button>
        <div className="mt-5">
          <span className="label-text ml-[10px] text-base text-black font-normal">
            레티가 처음이신가요?
          </span>
          <Link to="/signup/terms">
            <span className="label-text ml-[10px] text-base text-[#15A091] font-semibold">
              가입하기
            </span>
          </Link>
        </div>
      </Card>
      <img
        className="fixed left-4 bottom-0"
        src={DottedLine}
        alt="Dotted Line"
      />
    </>
  );
}

export default Login;
