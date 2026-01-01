import { Target, GitBranch, Calculator, TrendingUp } from 'lucide-react'

function BuildingBlocks() {
  const blocks = [
    {
      icon: Target,
      title: 'Scoring',
      description: 'Define valuation items and weighted scores',
    },
    {
      icon: GitBranch,
      title: 'Rule',
      description: 'Set conditional logic and decision rules',
    },
    {
      icon: Calculator,
      title: 'Credit Engine',
      description: 'Final decision and limit calculation',
    },
    {
      icon: TrendingUp,
      title: 'Report',
      description: 'Generates Final Report',
    },
  ]

  return (
    <div className="p-5">
      <h2 className="text-base font-semibold text-white mb-1.5">Building Blocks</h2>
      <p className="text-xs text-gray-400 mb-5">Drag or click to add block</p>
      <div className="flex flex-col gap-4">
        {blocks.map((block, index) => {
          const Icon = block.icon
          return (
            <div
              key={index}
              className="flex gap-3 p-3.5 bg-dark-surface border-2 border-dark-border-light rounded-md cursor-pointer transition-all hover:bg-dark-border hover:border-dark-border-lighter"
            >
              <div className="text-lg w-9 h-9 flex items-center justify-center bg-dark-bg rounded-md flex-shrink-0">
                <Icon size={20} className="text-gray-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-[13px] font-semibold text-gray-200 mb-1">{block.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">{block.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BuildingBlocks
