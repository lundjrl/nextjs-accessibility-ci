export const GoodCard: React.FC = () => (
  <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
    <div className="relative h-56 mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
        alt="img-blur-shadow"
      />
    </div>
    <div className="p-6">
      <p className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-bold text-blue-gray-900">
        UI/UX Review Check
      </p>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can
        enjoy the main night life in Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className="select-none rounded-lg bg-emerald-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-700/20 transition-all hover:shadow-lg hover:shadow-emerald-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Read More
      </button>
    </div>
  </div>
)
