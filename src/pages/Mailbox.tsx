import Mail from '../components/Mail';

const Mailbox = () => {
  // 유니크한 키 값도 들어가야함..
  const mails = [
    {
      key: 1,
      thumbnail:
        'https://img.freepik.com/premium-photo/gray-abstract-wall-display-product_36835-2777.jpg',
      title: '열심히하면 개발자가 되실 수 있어요',
      author: '김철수',
      commentCount: 15,
      content: '멋진 개발자가 되는 법',
      date: '1',
    },
    {
      key: 2,
      thumbnail:
        'https://img.freepik.com/premium-photo/gray-abstract-wall-display-product_36835-2777.jpg',
      title: '열심히하면 개발자가 되실 수 있어요',
      author: '김철수',
      commentCount: 5,
      content: '멋진 개발자가 되는 법',
      date: '6',
    },
  ];

  return (
    <section className="border-primary-default border-[1px] rounded-md w-[70rem] h-[40rem] mt-[3rem] grid grid-cols-1 gap-1">
      {mails.map((mail) => (
        <Mail
          key={mail.key}
          thumbnail={mail.thumbnail}
          title={mail.title}
          author={mail.author}
          commentCount={mail.commentCount}
          content={mail.content}
          date={mail.date}
        />
      ))}
    </section>
  );
};

export default Mailbox;
