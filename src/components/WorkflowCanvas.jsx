import { MousePointer2, Hand, ZoomOut, ZoomIn, Trash2, Link2, Calculator, MoreVertical, Plus } from 'lucide-react'

function WorkflowCanvas() {
  return (
    <div className="h-full flex flex-col bg-dark-bg p-8 md:p-12 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col items-center justify-start pt-4 pb-24">
        <div className="bg-dark-surface border-2 border-dark-border rounded-lg min-w-[220px] relative z-10">
          <div className="px-4 py-3.5 flex items-center justify-between">
            <span className="text-sm text-gray-200 font-semibold flex-1">Borrower application submitted</span>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-green-400 text-black rounded uppercase tracking-wide ml-3">
              Trigger
            </span>
          </div>
        </div>

        <div className="w-0.5 h-6 bg-gray-500 my-2.5 relative">
          <div className="absolute bottom-[-4px] left-[-4px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-gray-500"></div>
        </div>

        <div className="bg-dark-surface border-2 border-dark-border rounded-lg min-w-[220px] relative z-10">
          <div className="px-4 py-3.5 border-b-2 border-dark-border-light flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link2 size={16} className="text-gray-300" />
              <span className="text-sm font-semibold text-gray-200">Rule</span>
            </div>
            <button className="text-gray-400 hover:text-gray-300 transition-colors">
              <MoreVertical size={16} />
            </button>
          </div>
          <div className="p-4">
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Knock out"
                defaultValue="Knock out"
                className="flex-1 px-3 py-2 bg-dark-bg border-2 border-dark-border rounded-md text-gray-200 text-sm outline-none focus:border-green-500"
              />
              <button className="text-gray-400 hover:text-gray-300 p-1 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-green-500 text-sm font-semibold cursor-pointer">
              <Plus size={16} />
              <span>Add</span>
            </div>
          </div>
        </div>

        <div className="flex gap-20 mt-5 items-start">
          <div className="flex flex-col items-center gap-1.5">
            <div className="text-xs text-gray-400 mb-1.5">Not Flagged</div>
            <div className="w-20 h-0.5 bg-gray-500 relative">
              <div className="absolute left-[-4px] top-[-4px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[8px] border-r-gray-500"></div>
            </div>
            <div className="bg-dark-surface border-2 border-green-500 rounded-lg min-w-[220px] mt-0">
              <div className="px-4 py-3.5 border-b-2 border-dark-border-light flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calculator size={16} className="text-gray-300" />
                  <span className="text-sm font-semibold text-gray-200">Credit Engine</span>
                </div>
                <button className="text-gray-400 hover:text-gray-300 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-green-500 text-sm font-semibold cursor-pointer">
                  <Plus size={16} />
                  <span>Add</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="text-xs text-gray-400 mb-1.5">Flagged</div>
            <div className="w-20 h-0.5 bg-gray-500 relative">
              <div className="absolute right-[-4px] top-[-4px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-gray-500"></div>
            </div>
            <div className="flex items-center justify-center min-w-[60px] min-h-[60px]">
              <button className="w-12 h-12 bg-dark-surface border-2 border-dark-border rounded-full text-white cursor-pointer hover:border-gray-500 transition-all flex items-center justify-center">
                <Plus size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-1 bg-dark-surface border-2 border-dark-border-light rounded-md p-1.5 shadow-lg">
          <button className="w-7 h-7 bg-transparent border-none rounded cursor-pointer text-gray-400 hover:bg-dark-border hover:text-white transition-all flex items-center justify-center" title="Selection">
            <MousePointer2 size={14} />
          </button>
          <button className="w-7 h-7 bg-transparent border-none rounded cursor-pointer text-gray-400 hover:bg-dark-border hover:text-white transition-all flex items-center justify-center" title="Pan">
            <Hand size={14} />
          </button>
          <button className="w-7 h-7 bg-transparent border-none rounded cursor-pointer text-gray-400 hover:bg-dark-border hover:text-white transition-all flex items-center justify-center" title="Zoom out">
            <ZoomOut size={14} />
          </button>
          <button className="w-7 h-7 bg-transparent border-none rounded cursor-pointer text-gray-400 hover:bg-dark-border hover:text-white transition-all flex items-center justify-center" title="Zoom in">
            <ZoomIn size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkflowCanvas
