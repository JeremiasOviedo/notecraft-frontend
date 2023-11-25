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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10"
          {...props}
        >
          {children}
        </button>

    </Link>
  );
};

export default Button;