import { ColorTile } from '~/components/tiles/ColorTile'

const Page: React.FC = () => (
  <main className="min-h-screen p-24">
    <h1 className="flex items-center justify-center w-full p-20 text-4xl">Spark A11y Color Fail Example</h1>
    <div className="flex flex-row flex-wrap w-full gap-8">
      <ColorTile className="bg-red-400" />
      <ColorTile className="bg-orange-400" />
      <ColorTile className="bg-amber-400" />
      <ColorTile className="bg-yellow-400" />
      <ColorTile className="bg-lime-400" />
      <ColorTile className="bg-green-400" />
      <ColorTile className="bg-emerald-400" />
      <ColorTile className="bg-teal-400" />
      <ColorTile className="bg-cyan-400" />
      <ColorTile className="bg-sky-400" />
      <ColorTile className="bg-blue-400" />
      <ColorTile className="bg-indigo-400" />
      <ColorTile className="bg-violet-400" />
      <ColorTile className="bg-purple-400" />
      <ColorTile className="bg-fuchsia-400" />
      <ColorTile className="bg-pink-400" />
      <ColorTile className="bg-rose-400" />
    </div>
  </main>
)

export default Page
