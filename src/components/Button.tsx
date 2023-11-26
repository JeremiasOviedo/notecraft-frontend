import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  to: string; 
}

const Button: React.FC<ButtonProps> = ({ children, to, ...props }) => {
  return (
    <Link href={to}>
      
        <button
          className="bg-[#3C6997] hover:bg-blue-300 hover:text-slate-700 text-white font-bold py-2 px-4 rounded m-4 "
          {...props}
        >
          {children}
        </button>

    </Link>
  );
};

export default Button;