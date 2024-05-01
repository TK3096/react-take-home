import { list } from '@/actions/ballot'
import { BallotList } from '@/components/ballot/BallotList'

const HomePage = async () => {
  const data = await list()

  if (!data || data.length === 0) {
    return <div>Not found</div>
  }

  return (
    <div className='space-y-10'>
      {data.map((category) => (
        <BallotList
          key={category.id}
          categoryId={category.id}
          categoryName={category.title}
          nominees={category.items}
        />
      ))}
    </div>
  )
}

export default HomePage
