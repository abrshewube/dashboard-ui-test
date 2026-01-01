import BuildingBlocks from './components/BuildingBlocks'
import WorkflowCanvas from './components/WorkflowCanvas'
import CreditEnginePanel from './components/CreditEnginePanel'
import { Check } from 'lucide-react'

function WorkflowBuilder() {
  return (
    <div className="flex flex-col h-full bg-dark-bg">
      <div className="py-2.5 px-8 bg-dark-panel border-b-2 border-dark-border">
        <div className="flex items-center gap-2 mb-2.5 text-[13px]">
          <span className="text-[#14b8a6] font-bold">Workflow</span>
          <span className="text-white">›</span>
          <span className="text-gray-300 font-semibold">Create workflow</span>
        </div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#14b8a6] flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-gray-800" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-200 font-semibold whitespace-nowrap">Details</span>
            </div>
            <div className="w-4 h-0.5 bg-dark-border-lighter"></div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#14b8a6] flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-gray-800" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-200 font-semibold whitespace-nowrap">Settings</span>
            </div>
            <div className="w-4 h-0.5 bg-dark-border-lighter"></div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-dark-surface border-2 border-[#14b8a6] flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] font-semibold text-[#14b8a6]">03</span>
              </div>
              <span className="text-sm text-gray-200 font-semibold whitespace-nowrap">Steps</span>
            </div>
            <div className="w-4 h-0.5 bg-dark-border-lighter"></div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-dark-surface border-2 border-dark-border-lighter flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] font-semibold text-gray-300">04</span>
              </div>
              <span className="text-sm text-gray-200 font-semibold whitespace-nowrap">Report customization</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-transparent border-2 border-dark-border-lighter rounded-md text-gray-300 text-sm font-semibold cursor-pointer transition-all hover:bg-dark-surface hover:text-white">
              Save as draft
            </button>
            <button className="px-5 py-2.5 bg-green-600 border-none rounded-md text-white text-sm font-semibold cursor-pointer transition-all hover:bg-green-700">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-[280px_1fr_320px] gap-0 overflow-hidden">
        <div className="bg-dark-panel border-r-2 border-dark-border overflow-y-auto scrollbar-hide">
          <BuildingBlocks />
        </div>
        <div className="bg-dark-bg overflow-hidden">
          <WorkflowCanvas />
        </div>
        <div className="bg-dark-panel border-r-0 overflow-y-auto scrollbar-hide">
          <CreditEnginePanel />
        </div>
      </div>
    </div>
  )
}

export default WorkflowBuilder
