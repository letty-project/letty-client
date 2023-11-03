import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className="card w-[30rem] h-[40rem] bg-white border border-[#15A091] shadow-[0px_4px_11px_0px_#15A091] z-10">
      <div className="card-body flex items-center ">{children}</div>
    </div>
  );
};
