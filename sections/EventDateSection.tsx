import Section from '@/components/Section';

export function EventDateSection() {
  return (
    <Section>
      <div className="flex flex-row items-center justify-center bg-white w-full px-5 py-24 font-blod text-3xl">
        <div className='text-center'>
          2024.
          <br />
          02.24
          <br />
          토요일
        </div>
        <div className='mx-10'>-</div>
        <div className='text-center'>
          PM
          <br />
          14:00
        </div>
      </div>
    </Section>
  );
}
