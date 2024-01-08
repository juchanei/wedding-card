import Section from '@/app/components/Section'
import styles from './ContactSection.module.css'

type Props = { groom: SpouseContact, bride: SpouseContact }
type Contact = { role: FamilyRole, name: string, phoneNumber: string }
type SpouseContact = Contact & { parents: Contact[] }
type FamilyRole = '부' | '모' | '차남' | '장녀' // ...

export function ContactSection({ groom, bride }: Props) {
  const couple = [groom, bride]

  return (
    <Section>
      <div className={styles.spouseContact}>
        {couple.map(({ name, role, phoneNumber, parents }) => (
          <p key={name}>
            <span>
              {getParentsName(parents)}의 {role} <strong>{name}</strong>
            </span>
            <a href={`tel:${phoneNumber}`}><CallIcon /></a>
          </p>
        ))}
      </div>

      {groom.parents.length > 0 && (
        <div className={styles.parentContact}>
          <h3>신랑 측 혼주</h3>
          {groom.parents.map(({ role, name, phoneNumber }) => (
            <p key={name}>
              <span>
                {role} <strong>{name}</strong>
              </span>
              <a href={`tel:${phoneNumber}`}><CallIcon /></a>
            </p>
          ))}
        </div>
      )}

      {bride.parents.length > 0 && (
        <div className={styles.parentContact}>
          <h3>신부 측 혼주</h3>
          {bride.parents.map(({ role, name, phoneNumber }) => (
            <p key={name}>
              <span>
                {role} <strong>{name}</strong>
              </span>
              <a href={`tel:${phoneNumber}`}><CallIcon /></a>
            </p>
          ))}
        </div>
      )}
    </Section>
  )
}

function getParentsName(parents: Contact[]): string {
  return parents.map(it => it.name).join(' ')
}

function CallIcon() {
  return <>Call</>
}
