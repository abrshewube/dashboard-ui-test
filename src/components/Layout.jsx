import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

function Layout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex-1 flex flex-col overflow-hidden -ml-0">
        <TopBar 
          onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 overflow-auto bg-dark-bg scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
