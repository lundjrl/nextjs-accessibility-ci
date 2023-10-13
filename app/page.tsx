import { GoodCard } from '~/components/cards/GoodCard'

const HomePage: React.FC = () => (
  <main className="min-h-screen p-24">
    <h1 className="flex items-center justify-center w-full p-20 text-4xl">Spark A11y Pass</h1>
    <div className="flex flex-row flex-wrap w-full gap-8">
      <GoodCard />
      <GoodCard />
      <GoodCard />
    </div>
  </main>
)

export default HomePage
