import Section from '@/app/components/Section'

export function InvitationMessageSection() {
  const message = '7년 전 연인으로 만난 저희가\n가족이 되고자 결혼합니다.\n즐겁게 잘 살겠습니다.\n귀한 걸음 하시어 축하해주세요.'

  return (
    <Section bgColored={true}>
      <div className='flex flex-row items-center justify-center w-full border border-solid border-black py-4 mb-20 font-blod text-center text-xl leading-9 bg-transparent'>
        2024년 2월 24일 토요일 오후 2시
        <br />
        더베일리하우스 삼성점
      </div>
      <p className='text-center mb-20 whitespace-pre-line leading-9 tracking-wider'>
        {message}
      </p>
      <hr className='border-1 border-black w-20 mx-auto mb-20' />
      <p className='self-center w-300 text-justify after:content-[""] after:w-full after:inline-block tracking-wider leading-9'>
        이철수 · 인순애<span className='text-sm mx-1'>의 차남</span> 주찬
        <br />
        이현일 · 차미경<span className='text-sm mx-1'>의 장녀</span> 수인
      </p>
    </Section>
  )
}
