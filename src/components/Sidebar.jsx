import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'
import { 
  Grid3x3, 
  FileText, 
  Settings, 
  Target, 
  Calculator, 
  Database, 
  FolderKanban, 
  GitBranch, 
  Pyramid, 
  TrendingUp, 
  Zap, 
  Users, 
  Shield
} from 'lucide-react'

function Sidebar({ isCollapsed = false }) {
  const location = useLocation()

  const menuItems = [
    { icon: Grid3x3, label: 'Dashboard', path: '/', category: 'main' },
    { icon: FileText, label: 'Applications', path: '/applications', category: 'main' },
    { icon: Settings, label: 'Rules', path: '/rules', category: 'engines' },
    { icon: Target, label: 'Scoring', path: '/scoring', category: 'engines' },
    { icon: Calculator, label: 'Credit', path: '/credit', category: 'engines' },
    { icon: Database, label: 'Data Sources', path: '/data-sources', category: 'data' },
    { icon: FolderKanban, label: 'Data management', path: '/data-management', category: 'data' },
    { icon: GitBranch, label: 'Builder', path: '/workflow', category: 'workflow' },
    { icon: Pyramid, label: 'Simulator', path: '/simulator', category: 'workflow' },
    { icon: TrendingUp, label: 'Report', path: '/report', category: 'analytics' },
    { icon: Zap, label: 'Monitoring', path: '/monitoring', category: 'analytics' },
    { icon: Users, label: 'Partners', path: '/partners', category: 'administration' },
    { icon: Shield, label: 'Admin', path: '/admin', category: 'administration' },
  ]

  const groupedItems = {
    main: menuItems.filter(item => item.category === 'main'),
    engines: menuItems.filter(item => item.category === 'engines'),
    data: menuItems.filter(item => item.category === 'data'),
    workflow: menuItems.filter(item => item.category === 'workflow'),
    analytics: menuItems.filter(item => item.category === 'analytics'),
    administration: menuItems.filter(item => item.category === 'administration'),
  }

  const categories = [
    { name: 'Main', key: 'main', uppercase: false },
    { name: 'ENGINES', key: 'engines', uppercase: true },
    { name: 'DATA', key: 'data', uppercase: true },
    { name: 'WORKFLOW', key: 'workflow', uppercase: true },
    { name: 'ANALYTICS', key: 'analytics', uppercase: true },
    { name: 'ADMINISTRATION', key: 'administration', uppercase: true },
  ]

  return (
    <div 
      className={`${isCollapsed ? 'w-16' : 'w-72'} bg-dark-panel border-r border-dark-border flex flex-col overflow-y-auto overflow-x-hidden sidebar-scrollable transition-all duration-300 relative`} 
      style={{ scrollBehavior: 'smooth' }}
    >
      <nav className="flex-1 px-3 overflow-x-hidden pt-5">
        {categories.map(category => (
          <div key={category.key} className="mb-6">
            {!isCollapsed && (
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2 px-3">
                {category.uppercase ? category.name : category.name.toUpperCase()}
              </div>
            )}
            {groupedItems[category.key].map(item => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-3'} py-2.5 mb-1 rounded-md text-sm transition-all ${
                    isActive
                      ? 'bg-[#14b8a6]/15 border border-[#14b8a6]/30 text-gray-200 font-semibold'
                      : 'text-gray-300 font-semibold hover:bg-dark-surface hover:text-gray-200'
                  }`}
                  title={isCollapsed ? item.label : ''}
                >
                  <Icon 
                    size={18} 
                    className={`${isCollapsed ? '' : 'mr-3'} w-5 text-center ${isActive ? 'text-gray-300' : 'text-gray-400'}`}
                  />
                  {!isCollapsed && <span className="flex-1">{item.label}</span>}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
