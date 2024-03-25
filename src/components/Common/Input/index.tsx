import Image from 'next/image';
import { MouseEvent, useState } from 'react';

interface InputProps {
  inputType: string;
  isError?: boolean;
}

export default function Input({ isError, inputType }: InputProps) {
  let label = '';
  let placeholder = '';
  let errorMessage = '';
  let size = '';

  const [passwordType, setPasswordType] = useState('text');
  const eyeImage = passwordType === 'password' ? '/images/eye-off.png' : '/images/eye-on.png';

  const handlePasswordVisible = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordType((prevType: string) => (prevType === 'password' ? 'text' : 'password'));
  };

  switch (inputType) {
    case 'email':
      label = '이메일';
      placeholder = '이메일을 입력해 주세요';
      if (isError) errorMessage = '이메일 형식으로 작성해 주세요.';
      size = 'w-520';
      break;
    case 'password':
      label = '비밀번호';
      placeholder = '비밀번호를 입력해 주세요';
      if (isError) errorMessage = '8자 이상 입력해 주세요.';
      size = 'w-520';
      break;
    case 'checkPassword':
      label = '비밀번호';
      placeholder = '비밀번호를 입력해 주세요';
      if (isError) errorMessage = '비밀번호가 일치하지 않습니다.';
      size = 'w-520';
      break;
    default:
      break;
  }

  return (
    <div className={`relative flex flex-col items-start justify-center gap-8 ${size}`}>
      <label className="font-normal text-center text-16">{label}</label>
      <input
        className={`flex items-center gap-10 py-16 border w-full px-15 rounded-8 border-gray-d9 focus:border-[#3F72AF] text-16 font-normal ${isError ? 'focus:border-red' : ''}`}
        placeholder={`${placeholder}`}
        type={passwordType}
      />
      {(inputType === 'password' || inputType === 'checkPassword') && (
        <button className="absolute translate-y-16 right-16" type="button" onClick={handlePasswordVisible}>
          <Image width={24} height={24} src={eyeImage} alt="password toggle" sizes="24px" />
        </button>
      )}
      {isError && <span className="font-normal text-14 text-red">{errorMessage}</span>}
    </div>
  );
}
