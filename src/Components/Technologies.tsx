import { use } from "react";

export interface ITechnology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface ItechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

function Technologies({ technologiesPromise }: ItechnologiesProps) {
  const technologies = use(technologiesPromise);

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

      {/* Cards এখানে আসবে */}
      <div>
        {technologies.map(tech => (
          <p key={tech.id}>{tech.name}</p>
        ))}
      </div>

    </section>
  )
}

export default Technologies;