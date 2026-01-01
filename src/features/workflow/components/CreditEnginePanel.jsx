import { Filter, Plus } from 'lucide-react'

function CreditEnginePanel() {
  const rules = [
    'General Maximum Capacity',
    'Toot Maximum Capacity',
    'Toot Maximum Capacity',
    'Toot Adjusted Capacity',
  ]

  return (
    <div className="p-5">
      <h2 className="text-base font-semibold text-white mb-1.5">Credit Engine</h2>
      <p className="text-xs text-gray-400 mb-4">Drag items to the builder or click + to add</p>
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Search rules"
          className="flex-1 px-3 py-2 bg-dark-surface border-2 border-dark-border-light rounded-md text-gray-200 text-[13px] outline-none focus:border-purple-600 placeholder:text-gray-500"
        />
        <button className="w-9 h-9 bg-dark-surface border-2 border-dark-border-light rounded-md cursor-pointer text-gray-300 hover:bg-dark-border transition-all flex items-center justify-center">
          <Filter size={14} />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-dark-surface border-2 border-dark-border-light rounded-md transition-all hover:bg-dark-border hover:border-dark-border-lighter cursor-pointer"
          >
            <span className="text-sm text-gray-200 font-semibold flex-1">{rule}</span>
            <button className="w-6 h-6 bg-transparent border-none rounded text-green-500 cursor-pointer flex items-center justify-center transition-all hover:text-green-400">
              <Plus size={16} strokeWidth={2.5} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreditEnginePanel
