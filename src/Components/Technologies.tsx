import { use, useState } from "react"
import type { Itechnology } from "./Type/Technologies"
import TechnologyCard from "./TechnologyCard"
import SelectedStack from "./SelectedStack"

interface ItechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>
}

function Technologies({ technologiesPromise }: ItechnologiesProps) {
  const technologies = use(technologiesPromise)
  const [stack, setSelectedStack] = useState<Itechnology[]>([])

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        Explore the{" "}
        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-gray-400 text-base mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 grid grid-cols-3 gap-6">
          {technologies.map((technology: Itechnology) => (
            <TechnologyCard key={technology.id} technology={technology} stack={stack} setSelectedStack={setSelectedStack} />
          ))}
        </div>
        <div className="col-span-1">
          <p className="text-gray-400 text-base mb-3">
            Selected Stack
          </p>
          <SelectedStack stack={stack} setSelectedStack={setSelectedStack} />
        </div>
      </div>

    </section>
  )
}

export default Technologies