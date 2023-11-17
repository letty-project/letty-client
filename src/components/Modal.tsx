type Props = {
  openModal: boolean;
  closeModal: boolean;
  title: string;
  content: string;
  date: string;
  author: string;
  thumbnail: string;
  setOpenModal: (params: boolean) => void;
};

import close from 'src/assets/close.svg';

const Modal = (props: Props) => {
  return (
    <>
      <div className="relative z-20">
        <div
          className={`${
            props.openModal ? 'block' : 'hidden'
          } bg-white border-primary-default border-[1px] rounded-md p-20 w-[60rem] h-[40rem] overflow-y-scroll custom-scrollbar`}
        >
          <button
            className={`absolute w-10 h-10 bg-white rounded-full top-[-50px] right-[-40px] flex justify-center items-center`}
          >
            <img
              src={close}
              alt="close icon"
              onClick={() => props.setOpenModal(false)}
            />
          </button>
          <h1 className="text-4xl font-extrabold">{props.title}</h1>
          <hr className="solid border-primary-default my-5" />
          <p className="text-base font-semibold flex justify-between mb-5">
            <div>
              <span className="text-primary-default">By </span>
              <span>{props.author}</span>
            </div>

            <p className="text-[#838383]">{props.date}일전</p>
          </p>
          {props.thumbnail && (
            <img
              className="h-80 w-full rounded-md mb-5"
              src={props.thumbnail}
              alt="Post thumbnail"
            />
          )}
          <p className="text-base text-justify">
            안녕하세요! 이번개발 처음이라서라는 닉네임을 가진 개발 뉴비입니다..
            사실은 정말 처음인데 마음이 뜨겁네요...? 예술과 창의성은 인류의
            핵심적인 특징 중 하나이며 우리 생활에 큰 영향을 미치는 중요한
            주제입니다. 예술과 창의성 의역할, 의미, 그리고 우리 일상생활에
            어떻게 영향을 미치는지에 대해 논의해보겠습니다. 예술과 창의성:
            인간의 정체성과 연결 예술은 우리 인류의 역사와 문화에 깊이 뿌리를
            내린 중요한 표현 수단입니다. 그것은 우리가 사회적, 정서적, 정신적
            으로연결하고 커뮤니케이션하는 방법 중 하나이며, 우리의 아이덴티티와
            정체성을 형성하는 데 큰 역할을 합니다. 미 술,음악,무용, 문학 등
            예술의 다양한 형태를 통해 우리는 자신을 표현하고 탐구하며, 다른
            이들과 공감하고 소통합니 다.예술과 창의성은 우리의 삶을 더 풍요롭고
            풍부하게 만들어주는 중요한 부분입니다. 예술을 통해 우리는 인간 정체
            성을 탐색하고 표현하며, 창의성은 우리의 미래를 형성하고 발전시키는데
            필수적인 역할을 합니다. 따라서 예술과 창 의성을 더욱 가치 있게
            여겨야 하며, 이를 통해 우리의 삶을 더욱 풍요롭게 만들 수 있습니다.
          </p>
        </div>
      </div>
      <div
        className={`${
          props.openModal ? 'block' : 'hidden'
        } w-full h-full bg-black opacity-40 absolute top-0 left-0 z-10`}
        onClick={() => {
          props.setOpenModal(false);
          console.log('click');
        }}
      ></div>
    </>
  );
};

export default Modal;
