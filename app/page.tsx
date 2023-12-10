import Image from 'next/image'

export default function Home() {
  return (
    <article className="flex min-h-screen flex-col justify-between max-w-md mx-auto">
      <div className="py-24 px-5 bg-white">
        <h1 className="text-4xl text-left">
          24.02.24
          <br />
          SAT.PM 14:00
        </h1>
        <p className="py-24 h-96">
          <Image
            src="/vercel.svg"
            alt="Title Wedding Image"
            width={100}
            height={24}
            priority
          />
        </p>
        <h1 className="text-5xl text-right">
          <span>이수인</span>
          {` - `}
          <span>이주찬</span>
        </h1>
      </div>

      {/* 초대 문구 섹션 */}
      <Section title='초대합니다' bgColored={true}>
        <p className='text-center'>
          7년 전 연인으로 만난 저희가
          <br />
          가족이 되고자 결혼합니다.
          <br />
          즐겁게 잘 살겠습니다.
          <br />
          귀한 걸음 하시어 축하해주세요.
        </p>
      </Section>

      {/* 전화번호 섹션 */}
      <Section>
        <p>
          이철수, 인순애의 차남 <span>이주찬</span>
          <CallLink phoneNumber='010-4364-3208' />
        </p>
        <p>
          이현일, 차미경의 장녀 <span>이수인</span>
          <CallLink phoneNumber='010-4077-9142' />
        </p>
        <h3>신랑 측 혼주</h3>
        <p>
          <span>부</span> 이철수
          <CallLink phoneNumber='010-3182-2689' />
        </p>
        <p>
          <span>모</span> 인순애
          <CallLink phoneNumber='010-4155-3208' />
        </p>
        <h3>신부 측 혼주</h3>
        <p>
          <span>부</span> 이현일
          <CallLink phoneNumber='010-4596-0717' />
        </p>
        <p>
          <span>모</span> 차미경
          <CallLink phoneNumber='010-4596-3885' />
        </p>
      </Section>

      {/* 사진첩 섹션 */}
      <Section title="사진첩" bgColored={true}>
        <div>
          {/* 캐로셀 사진첩 구현 */}
        </div>
      </Section>

      {/* 날짜 섹션 */}
      <Section>
        <div className="flex flex-row items-center justify-between bg-white w-full px-5 py-24">
          <div>
            2024.
            <br />
            02.24
            <br />
            토요일
          </div>
          <div>-</div>
          <div>
            PM
            <br />
            14:00
          </div>
        </div>
      </Section>

      {/* 장소 섹션 */}
      <Section title="오시는 길" bgColored={true}>
        <p>
          {/* 지도 구현 */}
        </p>
        <p>
          서울시 강남구 영동대로 506
          <br />
          (삼성동 168-3, 더베일리하우스)
          <br />
          TEL) 02-539-2956
        </p>
        <hr />
        <h3>주차</h3>
        <p>블라블라~</p>
        <h3>대중교통</h3>
        <p>블라블라~</p>
      </Section>

      {/* 마음 전하실 곳 섹션 */}
      <Section title="마음 전하실 곳">
        <h3>신랑 측 계좌번호</h3>
        <p>블라블라~</p>
        <h3>신부 측 계좌번호</h3>
        <p>블라블라~</p>
      </Section>

      {/* 공유하기 섹션 */}
      <footer className="flex flex-col px-5 py-24 bg-amber-50 items-center">
        <p>카카오 톡으로 공유하기</p>
        <p>청첩장 링크 복사하기</p>
      </footer>
    </article>
  )
}

function Section({ bgColored, title, children }: { bgColored?: boolean | undefined, title?: string | undefined, children: React.ReactNode }) {
  const bgColor = bgColored ? 'bg-amber-50' : 'bg-white'
  return (
    <section className={`flex flex-col items-center justify-between ${bgColor} px-5 py-24`}>
      {title ? <SectionTitle title={title} /> : null}
      {children}
    </section>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="border-solid border-2 border-black rounded-full text-center font-bold inline-block py-1 px-3 mb-10">
      {title}
    </h2>
  )
}

function CallLink({ phoneNumber }: { phoneNumber: string }) {
  return <a href={`tel:${phoneNumber}`}><CallIcon /></a>
}

function CallIcon() {
  return <>Call</>
}