import Image from 'next/image';

export default function Content() {
  return (
    <div className="pc:ml-300 pc:mr-300 tablet:ml-40 tablet:mr-40 mobile:ml-10 mobile:mr-10">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center pc:text-50 tablet:text-40 mobile:text-30 mt-50">
          <div>
            새로운 일정 관리 <span className="font-bold text-primary">Calog</span>
          </div>
          <div>
            이제 <span className="font-bold text-primary">Calog</span>로 나의 하루를 관리하세요.
          </div>
        </div>
      </div>

      <div className="flex pc:flex-row pc:items-end pc:justify-between mt-50 pc:mt-100 pc:h-600 pt-60 pc:pl-60 rounded-8 bg-primary mobile:flex-col mobile:items-center tablet:h-970 tablet:pl-0">
        <div className="flex flex-col items-center gap-100 pc:mb-229 mb-70 pc:items-start">
          <span className="font-medium text-white text-18">Point 1</span>{' '}
          <span className="font-bold text-center text-white pc:text-start text-36 pc:text-48">
            일의 우선순위를
            <br /> 관리하세요
          </span>
        </div>

        <div className="tablet:w-600 tablet:h-500 bg-red mobile:w-350 mobile:h-300"></div>
      </div>

      <div className="flex pc:flex-row pc:items-end mt-100 pc:h-600 pt-60 pc:pl-60 rounded-8 bg-primary mobile:flex-col mobile:items-center tablet:h-970 tablet:pl-0 pc:gap-300">
        <div className="flex flex-col items-center gap-100 pc:mb-229 mb-70 pc:items-start">
          <span className="font-medium text-white text-18">Point 1</span>{' '}
          <span className="font-bold text-center text-white pc:text-start text-36 pc:text-48">
            해야 할 일을
            <br /> 등록하세요
          </span>
        </div>

        <div className="tablet:w-436 tablet:h-502 bg-red w-350 h-502"></div>
      </div>

      <div className="mt-90 pc:block mobile:flex mobile:flex-col mobile:items-center">
        <span className="font-medium text-30">생산성을 높이는 다양한 설정</span>
        <div className="grid pc:grid-cols-3 gap-33 mt-30 mb-160">
          <div className="relative rounded-t-8 mobile:w-375 pc:w-full">
            <Image
              className="w-full h-230 rounded-t-8"
              width={300}
              height={195}
              src="/images/landing/testImage1.avif"
              alt="Landing 임시 이미지"
            />
            <div className="flex flex-col gap-10 text-white pt-33 pr-33 pb-33 pl-33 bg-primary rounded-b-8">
              <span>캘린더 설정</span>
              <span>일정을 추가할 수 있어요.</span>
            </div>
          </div>

          <div className="rounded-t-8 mobile:w-375 pc:w-full">
            <Image
              className="w-full h-230 rounded-t-8"
              width={300}
              height={195}
              src="/images/landing/testImage1.avif"
              alt="Landing 임시 이미지"
            />
            <div className="flex flex-col gap-10 text-white pt-33 pr-33 pb-33 pl-33 bg-primary rounded-b-8">
              <span>초대</span>
              <span>친구를 초대할 수 있어요.</span>
            </div>
          </div>

          <div className="rounded-t-8 mobile:w-375 pc:w-full">
            <Image
              className="w-full h-230 rounded-t-8"
              width={300}
              height={195}
              src="/images/landing/testImage1.avif"
              alt="Landing 임시 이미지"
            />
            <div className="flex flex-col gap-10 text-white pt-33 pr-33 pb-33 pl-33 bg-primary rounded-b-8">
              <span>구성원</span>
              <span>구성원을 초대할 수 있어요.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
