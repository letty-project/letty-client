import { ReactNode } from 'react';
import Logo from '../assets/letty.svg';

type CardProps = {
  children: ReactNode;
  logo?: boolean;
};

export const Card = ({ children, logo = true }: CardProps) => {
  return (
    <div className="card w-[30rem] h-[44rem] bg-white border border-[#15A091] shadow-[0px_4px_11px_0px_#15A091] z-10 overflow-auto ">
      <div className="card-body flex items-center justify-between">
        {logo && (
          <img className="w-[230px] h-[170px]" src={Logo} alt="Letty Logo" />
        )}
        {children}
      </div>
    </div>
  );
};
