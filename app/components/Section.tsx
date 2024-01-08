
export default function Section({ bgColored, title, children }: { bgColored?: boolean | undefined, title?: string | undefined, children: React.ReactNode }) {
  const bgColor = bgColored ? 'bg-neutral-100' : 'bg-white'

  return (
    <section className={`flex flex-col items-stretch ${bgColor} px-7 py-24 text-lg`}>
      {title ? <SectionTitle title={title} /> : null}
      {children}
    </section>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className='self-center border-solid border border-black rounded-full text-center text-base text-black nline-block py-1 px-3 mb-10'>
      {title}
    </h2>
  )
}
