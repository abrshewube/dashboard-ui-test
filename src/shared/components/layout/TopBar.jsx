import { Bell, AlertCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

function TopBar({ onSidebarToggle, isSidebarCollapsed }) {
  return (
    <div className="h-16 bg-dark-panel border-b border-dark-border flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <button
          onClick={onSidebarToggle}
          className="w-8 h-8 bg-transparent border-none rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-surface transition-all cursor-pointer"
        >
          {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Jasmin"
            className="w-80 px-4 py-2 bg-dark-surface border border-dark-border-light rounded-md text-white text-sm outline-none focus:border-purple-600 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-sm text-gray-300">Hey, Marwan!</div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-xs font-medium">
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertCircle size={12} className="text-white" fill="white" />
          </div>
          <span>3 alerts needs action</span>
        </div>
        <button className="text-gray-400 hover:text-white p-2 rounded-md hover:bg-dark-surface transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 bg-dark-surface rounded-md text-white text-sm cursor-pointer hover:bg-dark-border transition-colors">
          <span>Marwan</span>
          <ChevronDown size={14} className="text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default TopBar
