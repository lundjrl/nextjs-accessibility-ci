const Page: React.FC = () => (
  <main className="min-h-screen p-24">
    <h1 className="flex items-center justify-center w-full p-20 text-4xl">Ignoring bad semantic Headers (H1)</h1>

    <h4 id="bad-heading" className="flex items-center justify-center w-full p-20 text-4xl">
      I&apos;m a H4 that shouldn't be here.
    </h4>
    <h2 className="flex items-center justify-center w-full p-20 text-4xl">I&apos;m an H2</h2>
    <h3 className="flex items-center justify-center w-full p-20 text-4xl">I&apos;m an H3</h3>
    <h4 className="flex items-center justify-center w-full p-20 text-4xl">I&apos;m an H4</h4>
    <div id="some-div">
      <p>Only the tags inside this div will be targeted. The poorly structured HTML above will be ignored. </p>
    </div>
  </main>
)

export default Page
