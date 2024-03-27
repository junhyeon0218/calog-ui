import Link from 'next/link';

function Header() {
  return (
    <div className="flex items-center justify-between pt-16 pb-16 pl-24 h-70 bg-primary pc:pr-90 tablet:pr-16 mobile:pr-16">
      <Link href="/">
        <h1 className="text-white text-25">Calog</h1>
      </Link>
      <div className="flex text-white gap-25">
        <Link href="#" className="text-15">
          로그인
        </Link>
        <Link href="#" className="text-15">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default Header;
