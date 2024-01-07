import Section from '@/components/Section'

export function LocationSection() {
  return (
    <Section title='오시는 길' bgColored={true}>
      <p>
        {/* 지도 구현 */}
      </p>
      <p className='text-center'>
        서울시 강남구 영동대로 506
        <br />
        (삼성동 168-3, 더베일리하우스)
        <br />
        TEL) 02-539-2956
      </p>
      <hr />
      <h3 className='mt-10 font-bold'>대중교통</h3>
      <p className='text-center'>
        2호선 삼성역 7번 출구 앞 첫 건물
      </p>
      <p className='text-center text-sm'>
        <br />
        * 교통이 혼잡하여, 주차 시간이 많이 소요될 수 있습니다.
        <br />
        되도록 편리한 대중교통을 이용해주시길 바랍니다.
      </p>
      <h3 className='mt-10 font-bold'>주차</h3>
      <p className='text-center'>
        더베일리하우스는 외부 주차장을 이용합니다.
        <br />
        주차는 예식장 앞에서 먼저 안내받으시길 바랍니다.
      </p>
    </Section>
  )
}
