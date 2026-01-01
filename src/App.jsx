import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import WorkflowBuilder from './pages/WorkflowBuilder'
import Monitoring from './pages/Monitoring'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workflow" element={<WorkflowBuilder />} />
          <Route path="/monitoring" element={<Monitoring />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

