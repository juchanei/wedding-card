
export default function Section({ bgColored, title, children }: { bgColored?: boolean | undefined, title?: string | undefined, children: React.ReactNode }) {
  const bgColor = bgColored ? 'bg-amber-50' : 'bg-white'

  return (
    <section className={`flex flex-col items-center justify-between ${bgColor} px-5 py-24`}>
      {title ? <SectionTitle title={title} /> : null}
      {children}
    </section>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="border-solid border-2 border-black rounded-full text-center font-bold inline-block py-1 px-3 mb-10">
      {title}
    </h2>
  )
}
