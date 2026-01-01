import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../shared/components/layout/Layout'
import Dashboard from '../features/dashboard/Dashboard'
import WorkflowBuilder from '../features/workflow/WorkflowBuilder'


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workflow" element={<WorkflowBuilder />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

