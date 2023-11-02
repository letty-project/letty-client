import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import home from '../assets/home.svg';
import person from '../assets/person.svg';

const Mailing = () => {
  return (
    <div className="flex flex-row">
      <div className='flex flex-col'>
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full">
          <img
          className=""
          src={home}
          alt="home"
        />메인 페이지</button>
        <button className="btn bg-[#15A091] my-[10px] border-0 text-white font-semibold text-base w-full"><img
          className=""
          src={person}
          alt="person"
        />구독자 관리</button>
      </div>
      <div>
        <ReactQuill className="bg-white" theme="snow" />
      </div>
    </div>
    );
};

export default Mailing;
