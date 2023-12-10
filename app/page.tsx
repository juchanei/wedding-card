import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article>
        <div>
          <h1 className="text-6xl font-bold text-left">
            24.02.24
            <br />
            SAT.PM 14:00
          </h1>
          <Image
            src="/vercel.svg"
            alt="Title Wedding Image"
            width={100}
            height={24}
            priority
          />
          <h1 className="text-6xl font-bold text-right">
            <span>이수인</span>
            {` - `}
            <span>이주찬</span>
          </h1>
        </div>

        {/* 초대 문구 섹션 */}
        <section className="flex flex-col justify-between">
          <h2>초대합니다</h2>
          <p>
            7년 전 연인으로 만난 저희가
            <br />
            가족이 되고자 결혼합니다.
            <br />
            즐겁게 잘 살겠습니다.
            <br />
            귀한 걸음 하시어 축하해주세요.
          </p>
        </section>

        {/* 전화번호 섹션 */}
        <section>
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
        </section>

        {/* 사진첩 섹션 */}
        <section>
          <h2>사진첩</h2>
          <div>
            {/* 캐로셀 사진첩 구현 */}
          </div>
        </section>

        {/* 날짜 섹션 */}
        <section className='flex flex-row items-center'>
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
        </section>

        {/* 장소 섹션 */}
        <section>
          <h2>오시는 길</h2>
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
        </section>

        {/* 마음 전하실 곳 섹션 */}
        <section>
          <h2>마음 전하실 곳</h2>
          <h3>신랑 측 계좌번호</h3>
          <p>블라블라~</p>
          <h3>신부 측 계좌번호</h3>
          <p>블라블라~</p>
        </section>

        {/* 공유하기 섹션 */}
        <section>
          <p>카카오 톡으로 공유하기</p>
          <p>청첩장 링크 복사하기</p>
        </section>
      </article>
    </main>
  )
}

function CallLink({ phoneNumber }: { phoneNumber: string }) {
  return <a href={`tel:${phoneNumber}`}><CallIcon /></a>
}

function CallIcon() {
  return <>Call</>
}