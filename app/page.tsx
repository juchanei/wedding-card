import { MainSection } from '@/app/components/MainSection'
import { InvitationMessageSection } from '@/app/components/InvitationMessageSection'
import { ContactSection } from '@/app/components/ContactSection'
import { AlbumSection } from '@/app/components/AlbumSection'
import { LocationSection } from '@/app/components/LocationSection'
import { BankAccountSection } from '@/app/components/BankAccountSection'
import Section from './components/Section'

export default function Home() {
  return (
    <article className='flex min-h-screen flex-col justify-between max-w-md mx-auto'>
      <main>
        <MainSection />
        <InvitationMessageSection />
        {/* <ContactSection
          groom={{
            role: '차남', name: '이주찬', phoneNumber: '010-4364-3208',
            parents: [
              { role: '부', name: '이철수', phoneNumber: '010-3182-2689' },
              { role: '모', name: '인순애', phoneNumber: '010-4155-3208' },
            ]
          }}
          bride={{
            role: '장녀', name: '이수인', phoneNumber: '010-4077-9142',
            parents: [
              { role: '부', name: '이현일', phoneNumber: '010-4596-0717' },
              { role: '모', name: '차미경', phoneNumber: '010-4596-3885' },
            ]
          }}
        /> */}
        <AlbumSection />
        <LocationSection
          address={`서울시 강남구 영동대로 506
            (삼성동 168-3, 더베일리하우스)
            TEL) 02-539-2956`}
          transportations={[
            {
              title: '지하철',
              content: '2호선 삼성역 7번 출구 앞 첫 건물',
            },
            {
              title: '버스',
              content: `[간선] 143. 146. 301. 342, 362, 401
                [지선] 2413, 2415, 3217. 3412, 3414. 3417
                [광역] 9407. 9507. 9607`,
            },
            {
              title: '주차',
              content: `더베일리하우스는 외부 주차장을 이용합니다.
                주차는 예식장 앞에서 먼저 안내받으시길 바랍니다.
                
                1주차장: 삼성동 대화빌딩
                2주차장: 삼성동 남해주차장`,
            },
          ]}
          warning={`교통이 혼잡하여, 주차 시간이 많이 소요될 수 있습니다.
                    되도록 편리한 대중교통을 이용해주시길 바랍니다.`}
        />
        <BankAccountSection />
      </main>
      <footer className='flex flex-col px-5 py-24 bg-neutral-100 items-center'>
        <p>카카오 톡으로 공유하기</p>
        <p>청첩장 링크 복사하기</p>
      </footer>
    </article>
  )
}
