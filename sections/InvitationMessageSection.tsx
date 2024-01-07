import Section from '@/components/Section';

export function InvitationMessageSection() {
  const message = '7년 전 연인으로 만난 저희가\n가족이 되고자 결혼합니다.\n즐겁게 잘 살겠습니다.\n귀한 걸음 하시어 축하해주세요.';

  return (
    <Section title='초대합니다' bgColored={true}>
      <p className='text-center whitespace-pre-line'>
        {message}
      </p>
    </Section>
  );
}
