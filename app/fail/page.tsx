import { BadCard } from '~/components/cards/BadCard'

const FailPage = () => (
  <main className="min-h-screen p-24">
    <h1 className="flex items-center justify-center w-full p-20 text-4xl">Spark A11y Fail</h1>
    <div className="flex flex-row flex-wrap w-full gap-8">
      <BadCard />
      <BadCard />
      <BadCard />
    </div>
  </main>
)

export default FailPage
