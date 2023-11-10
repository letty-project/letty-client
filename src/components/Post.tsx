type Props = {
  thumbnail: string;
  title: string;
  author: string;
  commentCount: number;
  //  이클립스로 트림하는 걸 여기서 구현?
  content: string;
  date: string;
};

export const Post = ({
  thumbnail,
  title,
  author,
  commentCount,
  content,
  date,
}: Props) => {
  return (
    <div className="bg-white w-96 rounded-md p-3 z-10 border-primary-default border-[1px]">
      {thumbnail && (
        <img
          className="h-48 w-full rounded-md"
          src={thumbnail}
          alt="Post thumbnail"
        />
      )}
      <div className="p-2">
        <h4 className="text-[1.1em] font-bold text-black hover:underline">
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
  );
};
