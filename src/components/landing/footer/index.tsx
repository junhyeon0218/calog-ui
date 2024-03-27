import Image from 'next/image';

export default function Footer() {
  return (
    <div className="pt-40 pb-40 pl-40 pr-40 text-white tablet:h-100 bg-primary mobile:h-220">
      <div className="tablet:grid-cols-3 tablet:grid mobile:flex mobile:flex-col mobile:items-center mobile:gap-32">
        <span>©calog - 2024</span>
        <div className="flex justify-center gap-19">
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className="flex justify-end gap-14">
          <Image width={20} height={20} src="/images/landing/facebook-icon.svg" alt="facebook icon" />
          <Image width={20} height={20} src="/images/landing/instagram-icon.svg" alt="instagram icon" />
        </div>
      </div>
    </div>
  );
}
