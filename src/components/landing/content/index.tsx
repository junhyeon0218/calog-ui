import Image from 'next/image';

export default function Content() {
  return (
    <div className="ml-360 mr-360">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center text-50 mt-50">
          <div>
            새로운 일정 관리 <span className="font-bold text-primary">Calog</span>
          </div>
          <div>
            이제 <span className="font-bold text-primary">Calog</span>로 나의 하루를 관리하세요.
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between mt-100 h-600 pt-60 pl-60 rounded-8 bg-primary">
        <div className="flex flex-col gap-100 mb-229">
          <span className="font-medium text-white text-18">Point 1</span>{' '}
          <span className="font-bold text-white text-48 ">
            일의 우선순위를
            <br /> 관리하세요
          </span>
        </div>
        <div className="w-600 h-500 bg-red"></div>
      </div>

      <div className="flex items-end gap-100 mt-90 h-600 pt-60 pl-60 rounded-8 bg-primary">
        <div className="w-436 h-502 bg-red"></div>
        <div className="flex flex-col items-start gap-100 mb-229">
          <span className="font-medium text-white text-18">Point 1</span>{' '}
          <span className="font-bold text-white text-48">
            해야 할 일을
            <br /> 등록하세요
          </span>
        </div>
      </div>

      <div className="mt-90">
        <span className="font-medium text-30">생산성을 높이는 다양한 설정</span>
        <div className="grid grid-cols-3 gap-33 mt-30 mb-160">
          <div className="relative rounded-t-8">
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

          <div className="rounded-t-8">
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

          <div className="rounded-t-8">
            <Image
              className="w-full h-230 rounded-t-8"
              width={300}
              height={195}
              src="/images/landing/testImage1.avif"
              alt="Landing 임시 이미지"
            />
            <div className="flex flex-col gap-10 text-white pt-33 pr-33 pb-33 pl-33 bg-primary rounded-b-8">
              <span>구성원</span>
              <span>구성원을 초대하고 내보낼 수 있어요.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
