import Image from 'next/image';
import { MouseEvent, useState } from 'react';

interface InputProps {
  isError?: boolean;
  label: string;
  placeholder: string;
  size: string;
  errorMessage: string;
}

export default function Input({ isError, label, placeholder, size, errorMessage }: InputProps) {
  const [passwordType, setPasswordType] = useState('text');
  const eyeImage = passwordType === 'password' ? '/images/eye-off.png' : '/images/eye-on.png';

  const handlePasswordVisible = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordType((prevType: string) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={`relative flex flex-col items-start justify-center gap-8 ${size}`}>
      <label className="font-normal text-center text-16">{label}</label>
      <input
        className={`flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal ${isError ? 'focus:border-red' : ''}`}
        placeholder={`${placeholder}`}
        type={passwordType}
      />
      {label === '비밀번호' && (
        <button className="absolute translate-y-16 right-16" type="button" onClick={handlePasswordVisible}>
          <Image width={24} height={24} src={eyeImage} alt="password toggle" sizes="24px" />
        </button>
      )}
      {isError && <span className="font-normal text-14 text-red">{errorMessage}</span>}
    </div>
  );
}
