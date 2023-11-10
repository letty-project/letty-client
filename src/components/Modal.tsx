type Props = {
  openModal: boolean;
  closeModal: boolean;
  title: string;
  content: string;
  date: string;
  author: string;
  thumbnail: string;
};

const Modal = (props: Props) => {
  return (
    <div className={`${props.openModal ? 'block' : 'hidden'} `}>
      {props.thumbnail && (
        <img
          className="h-48 w-full rounded-md"
          src={props.thumbnail}
          alt="Post thumbnail"
        />
      )}
      <div className="p-2">
        <h4 className="text-[1.1em] font-bold text-black hover:underline">
          {props.title}
        </h4>
        <p className="text-sm font-semibold">
          <span className="text-primary-default">By </span>
          <span>{props.author}</span>
        </p>
        <p className="my-2 text-[#5A5A5A]">
          {props.content}
          <button className="font-semibold">...더보기</button>
        </p>

        <p className="text-[#5A5A5A] text-xs">{props.date}일전</p>
      </div>
      <hr className="divide-solid"></hr>
    </div>
  );
};

export default Modal;
