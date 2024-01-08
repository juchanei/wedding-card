import Section from '@/app/components/Section'

type Props = {
  address: string,
  transportations: { title: string, content: string }[],
  warning: string,
}

export function LocationSection({ address, transportations, warning }: Props) {
  return (
    <Section title='오시는 길' bgColored={true}>
      <div className='text-center border border-black border-solid'>
        {/* 지도 구현 */}
        <br />
        <br />
        <br />
        <br />
        <br />
        네이버 지도 구현
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className='my-20'>
        <AddressParagraph address={address} />
      </div>
      <hr className='border-1 border-black w-20 mx-auto' />
      <div className='mt-20'>
        {transportations.map(({ title, content }) => (
          <TransportationParagraph key={title} title={title} content={content} />
        ))}
        {warning && <WarningParagraph 
          content={warning}
        />}
      </div>
    </Section>
  )
}

function AddressParagraph({ address }: { address: string }) {
  return (
    <p className='text-center whitespace-pre-line leading-9'>
      {address}
    </p>
  )
}

function WarningParagraph({ content }: { content: string }) {
  return (
    <p className='mt-20 text-center text-sm whitespace-pre-line'>
      * {content}
    </p> 
  )
}

function TransportationParagraph({ title, content }: { title: string, content: string }) {
  return (
    <div className='mb-10'>
      <h3 className='mb-3 font-bold'>{title}</h3>
      <p className='text-base whitespace-pre-line'>
        {content}
      </p>
    </div>
  )
}