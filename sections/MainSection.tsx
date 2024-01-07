import Image from 'next/image'

export function MainSection() {
  return (
    <div className='pt-10 pb-24 px-5 bg-white'>
      <h1 className='text-4xl text-left'>
        24.02.24
        <br />
        SAT.PM 14:00
      </h1>
      <p className='my-8 h-[70vh] relative'>
        <Image
          src='/main.jpg'
          alt='Title Wedding Image'
          fill
          objectFit='cover'
          objectPosition='top'
          priority />
      </p>
      <h1 className='text-5xl text-right'>
        <span>이수인</span>
        {' - '}
        <span>이주찬</span>
      </h1>
    </div>
  )
}
