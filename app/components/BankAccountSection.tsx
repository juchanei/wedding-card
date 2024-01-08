'use client'

import Section from '@/app/components/Section'

export function BankAccountSection() {
  const copy = async (bankAccount: string) => {
    try {
      await navigator.clipboard.writeText(bankAccount)
      alert('계좌번호가 복사되었습니다.')
    } catch (error) {
      alert('복사에 실패했습니다.')
    }
  }

  return (
    <Section title='마음 전하실 곳'>
      <div className='mb-10'>
        <h3 className='mb-3 font-bold'>신랑 측 계좌번호</h3>
        <button onClick={() => copy('123-456-7890')}>복사</button>
      </div>
      <div>
        <h3 className='mb-3 font-bold'>신부 측 계좌번호</h3>
        <p>블라블라~</p>
      </div>
      <div className='text-center mt-20'>
        화환은 정중히 사양합니다
      </div>
    </Section>
  )
}
