import useFetch from "./Components/UseFetch";

const photos = [
  {
    id: 1,
    title: "Beautiful Mountain",
    image: "#"
  },
  {
    id: 2,
    title: "Forest Adventure",
    image: "#"
  },
  {
    id: 3,
    title: "Lake View",
    image: "#"
  },
  {
    id: 4,
    title: "City Lights",
    image: "#"
  },
  {
    id: 5,
    title: "Ocean Waves",
    image: "#"
  },
  {
    id: 6,
    title: "Green Hills",
    image: "#"
  },
  {
    id: 7,
    title: "Desert Road",
    image: "#"
  },
  {
    id: 8,
    title: "Snow Mountains",
    image: "#"
  },
  {
    id: 9,
    title: "River Side",
    image: "#"
  },
  {
    id: 10,
    title: "Sunset",
    image: "#"
  },
  {
    id: 11,
    title: "Nature",
    image: "#"
  },
  {
    id: 12,
    title: "Road Trip",
    image: "#"
  }
];

function App() {
  const {data, loading, error} = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=12"
  );

  if (loading) {
    return <div className="h-screen text-white bg-black flex justify-center ">
      <h2 className="flex text-white text-2xl items-center">Loading
        <span className="animate-pulse text-2xl">.</span>
        <span className="animate-pulse text-2xl [animation-delay:200ms]">.</span>
        <span className="animate-pulse text-2xl [animation-delay:400ms]">.</span>
        <span className="animate-pulse text-2xl [animation-delay:600ms]">.</span>
      </h2>
      </div>
  }

  if (error) {
    return <div className="h-screen text-white bg-black flex justify-center ">
      <h2 className="flex text-white text-2xl font-mono items-center">Error : {error}
      </h2>
      </div>
  }

  return (
    <div className="min-h-screen bg-black px-4 pb-10">
      <h1 className="p-8 text-center font-mono text-2xl font-semibold text-white">
        Photo Boxes
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data?.map((photo, index) => (
          <article
            key={photo.id}
            className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="flex h-44 flex-col justify-between bg-linear-to-br from-cyan-700 via-blue-800 to-indigo-950 p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Box {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-3xl text-cyan-200/80">+</span>
              </div>
              <p className="text-4xl font-bold text-white/90">#{photo.id}</p>
            </div>

            <div className="p-4">
              <h2 className="line-clamp-2 min-h-12 text-base font-semibold capitalize text-white">
                {photo.title}
              </h2>
              <p className="mt-3 text-xs uppercase tracking-widest text-cyan-400">
                Explore collection
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
  }



export default App;