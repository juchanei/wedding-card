import Section from '@/components/Section'

const couple = {
  groom: {
    role: '차남', name: '이주찬', phoneNumber: '010-4364-3208',
    parents: [
      { role: '부', name: '이철수', phoneNumber: '010-3182-2689' },
      { role: '모', name: '인순애', phoneNumber: '010-4155-3208' },
    ]
  },
  bride: {
    role: '장녀', name: '이수인', phoneNumber: '010-4077-9142',
    parents: [
      { role: '부', name: '이현일', phoneNumber: '010-4596-0717' },
      { role: '모', name: '차미경', phoneNumber: '010-4596-3885' },
    ]
  }
}

export function ContactSection() {
  return (
    <Section>
      {[couple.bride, couple.bride].map((spouse) => (
        <p key={spouse.name}>
          {spouse.parents.map(it => it.name).join(', ')}의 {spouse.role} {spouse.name}
          <CallLink phoneNumber={spouse.phoneNumber} />
        </p>
      ))}

      <h3>신랑 측 혼주</h3>
      {couple.groom.parents.map((parent) => (
        <p key={parent.role}>
          <span>{parent.name}</span>
          {parent.role}
          <CallLink phoneNumber={parent.phoneNumber} />
        </p>
      ))}

      <h3>신부 측 혼주</h3>
      {couple.bride.parents.map((parent) => (
        <p key={parent.role}>
          <span>{parent.name}</span>
          {parent.role}
          <CallLink phoneNumber={parent.phoneNumber} />
        </p>
      ))}
    </Section>
  );
}

function CallLink({ phoneNumber }: { phoneNumber: string }) {
  return <a href={`tel:${phoneNumber}`}><CallIcon /></a>
}

function CallIcon() {
  return <>Call</>
}
