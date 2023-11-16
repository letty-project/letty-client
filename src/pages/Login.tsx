import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/google-icon.svg';

import { Mailing } from 'src/components/Mailing';
// NOTE: DottedLine 이 여기에 있어도 되는건가? Layout에 있어야 하는거 아닌가?
// import DottedLine from '../assets/dotted-line.svg';

function Login() {
  return (
    <>
      <Mailing
        thumbnail={
          'https://img.freepik.com/premium-photo/gray-abstract-wall-display-product_36835-2777.jpg'
        }
        title={'멋진 개발자가 되는 법'}
        author={'김철수'}
        commentCount={4}
        content={'열심히하면 개발자가 되실 수 있어요~'}
        date={'6'}
      />
      {/* <Card>
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
          <button className="text-[#8C8C8C] font-semibold text-lg">
            구글 계정으로 로그인
          </button>
          <div className="w-[43px]"></div>
        </button>
        <div className="mt-5">
          <button className="label-text ml-[10px] text-base text-black font-normal">
            레티가 처음이신가요?
          </button>
          <Link to="/signup/terms">
            <button className="label-text ml-[10px] text-base text-[#15A091] font-semibold">
              가입하기
            </button>
          </Link>
        </div>
      </Card>
      <img
        className="fixed left-4 bottom-0"
        src={DottedLine}
        alt="Dotted Line"
      /> */}
    </>
  );
}

export default Login;
