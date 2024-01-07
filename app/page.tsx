import { MainSection } from '@/sections/MainSection'
import { InvitationMessageSection } from '@/sections/InvitationMessageSection'
import { ContactSection } from '@/sections/ContactSection'
import { AlbumSection } from '@/sections/AlbumSection'
import { EventDateSection } from '@/sections/EventDateSection'
import { LocationSection } from '@/sections/LocationSection'
import { BankAccountSection } from '@/sections/BankAccountSection'

export default function Home() {
  return (
    <article className="flex min-h-screen flex-col justify-between max-w-md mx-auto">
      <main>
        <MainSection />
        <InvitationMessageSection />
        <ContactSection />
        <AlbumSection />
        <EventDateSection />
        <LocationSection />
        <BankAccountSection />
      </main>
      <footer className="flex flex-col px-5 py-24 bg-amber-50 items-center">
        <p>카카오 톡으로 공유하기</p>
        <p>청첩장 링크 복사하기</p>
      </footer>
    </article>
  )
}
