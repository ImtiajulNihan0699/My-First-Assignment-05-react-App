import type { Itechnology } from './Type/Technologies'

interface IProps {
  technology: Itechnology
  stack: Itechnology[]
  setSelectedStack: React.Dispatch<React.SetStateAction<Itechnology[]>>
}

const TechnologyCard = ({ technology, stack, setSelectedStack }: IProps) => {
  const { name, description, icon, category, difficulty, rating, badge } = technology
  const isAdded = stack.some(tech => tech.id === technology.id)

  const handleAddToStack = () => {
    if (isAdded) return
    setSelectedStack([...stack, technology])
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="w-12 h-12 object-contain" />
        <span className="text-sm font-medium bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          {badge}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-3 text-xs font-medium">
        <span className="text-pink-500 border border-pink-200 rounded-full px-3 py-1">{category}</span>
        <span className="text-gray-400">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700">⭐ {rating}</span>
      </div>
      <button
        onClick={handleAddToStack}
        disabled={isAdded}
        className={`w-full py-3 rounded-xl transition-colors text-white text-sm font-medium ${isAdded ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-700'}`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechnologyCard