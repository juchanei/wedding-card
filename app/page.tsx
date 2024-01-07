import { MainSection } from '@/sections/MainSection'
import { InvitationMessageSection } from '@/sections/InvitationMessageSection'
import { ContactSection } from '@/sections/ContactSection'
import { AlbumSection } from '@/sections/AlbumSection'
import { EventDateSection } from '@/sections/EventDateSection'
import { LocationSection } from '@/sections/LocationSection'
import { BankAccountSection } from '@/sections/BankAccountSection'

export default function Home() {
  return (
    <article className='flex min-h-screen flex-col justify-between max-w-md mx-auto'>
      <main>
        <MainSection />
        <InvitationMessageSection />
        <ContactSection
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
        />
        <AlbumSection />
        <EventDateSection />
        <LocationSection />
        <BankAccountSection />
      </main>
      <footer className='flex flex-col px-5 py-24 bg-amber-50 items-center'>
        <p>카카오 톡으로 공유하기</p>
        <p>청첩장 링크 복사하기</p>
      </footer>
    </article>
  )
}
