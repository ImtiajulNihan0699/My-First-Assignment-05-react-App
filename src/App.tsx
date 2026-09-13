import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/Technologies";

const fetchTechnologies = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

function App() {
  const [technologiesPromise] = useState(() => fetchTechnologies())

  return (
    <>
      <Navbar />
      <Banner />
      <div className="flex justify-center py-2">
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500"></div>
      </div>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  )
}

export default App