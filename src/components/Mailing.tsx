import { useState } from 'react';
import Modal from './Modal';
import bookmark from 'src/assets/bookmark.svg';

type Props = {
  thumbnail: string;
  title: string;
  author: string;
  commentCount: number;
  //  이클립스로 트림하는 걸 여기서 구현?
  content: string;
  // 데이트 타입고민: 백엔드에서 스트링값으로 받아서 여기서 며칠전인지 계산하는건가?
  // 그렇다면 맥시멈 넘버는 얼마? 7일전
  date: string;
};

export const Mailing = ({
  thumbnail,
  title,
  author,
  commentCount,
  content,
  date,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className={`bg-white w-96 rounded-md p-3 z-10 border-primary-default border-[1px] ${
          openModal ? 'hidden' : 'block'
        }`}
        onClick={() => setOpenModal(true)}
      >
        {thumbnail && (
          <>
            <img
              className="h-48 w-full rounded-md relative"
              src={thumbnail}
              alt="Post thumbnail"
            />
            <img
              className="relative top-[-11.25rem] right-[-20.5rem]"
              src={bookmark}
              alt="Bookmark"
            />
          </>
        )}
        <div className="p-2">
          <h4 className="text-[1.2rem] font-bold text-black hover:underline">
            {title}
          </h4>
          <p className="text-sm font-semibold">
            <span className="text-primary-default">By </span>
            <span>{author}</span>
          </p>
          <p className="my-2 text-[#5A5A5A]">
            {content}
            <button className="font-semibold">...더보기</button>
          </p>

          <p className="text-[#5A5A5A] text-xs">
            {date}일전 &#183; 댓글 {commentCount}개 보기
          </p>
        </div>
      </div>
      <Modal
        openModal={openModal}
        closeModal={false}
        title={title}
        content={content}
        date={date}
        author={author}
        thumbnail={thumbnail}
        setOpenModal={setOpenModal}
      />
    </>
  );
};
