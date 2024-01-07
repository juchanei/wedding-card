import Section from '@/components/Section'

type Props = { groom: SpouseContact, bride: SpouseContact }
type Contact = { role: FamilyRole, name: string, phoneNumber: string }
type SpouseContact = Contact & { parents: Contact[] }
type FamilyRole = '부' | '모' | '차남' | '장녀' // ...

export function ContactSection({ groom, bride }: Props) {
  return (
    <Section title='연락처'>
      <SpouseCantact spouse={groom} />
      <SpouseCantact spouse={bride} />

      {groom.parents.length > 0 && <h3>신랑 측 혼주</h3>}
      {groom.parents.map(parent => <ParentContact key={parent.role} parent={parent} />)}

      {bride.parents.length > 0 && <h3>신부 측 혼주</h3>}
      {bride.parents.map(parent => <ParentContact key={parent.role} parent={parent} />)}

    </Section>
  )
}

function SpouseCantact({ spouse }: { spouse: SpouseContact }) {
  return (
    <p>
      {spouse.parents.map(it => it.name).join(', ')}의 {spouse.role} {spouse.name}
      <a href={`tel:${spouse.phoneNumber}`}><CallIcon /></a>
    </p>
  )
}

function ParentContact({ parent }: { parent: Contact }) {
  return (
    <p>
      <span>{parent.role}</span>
      {parent.name}
      <a href={`tel:${parent.phoneNumber}`}><CallIcon /></a>
    </p>
  )
}

function CallIcon() {
  return <>Call</>
}
