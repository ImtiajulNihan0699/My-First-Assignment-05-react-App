import { TbTrash } from 'react-icons/tb'
import type { Itechnology } from './Type/Technologies'

function SelectedStack({ stack, setSelectedStack }: { stack: Itechnology[], setSelectedStack: React.Dispatch<React.SetStateAction<Itechnology[]>> }) {

  const handleRemove = (id: string) => {
    setSelectedStack(stack.filter(tech => tech.id !== id))
  }

  const handleRemoveAll = () => {
    setSelectedStack([])
  }

  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">

      <div>
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <span className="text-sm text-gray-400 font-medium">{stack.length} Technology Selected</span>
      </div>

      {stack.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-10">No technology selected yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center gap-3 border border-gray-100 rounded-xl p-3 hover:shadow-sm transition-shadow">
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <span onClick={() => handleRemove(tech.id)} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                    <TbTrash/>
            </span>
            </div>
          ))}

          <button
            onClick={handleRemoveAll}
            className="w-full py-2 mt-2 rounded-xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}

    </div>
  )
}

export default SelectedStack