import MetricCard from './components/MetricCard'
import StackedBarChart from './components/StackedBarChart'
import DataSourceUsage from './components/DataSourceUsage'
import LineChart from './components/LineChart'
import RiskDistribution from './components/RiskDistribution'
import ApplicationsTable from './components/ApplicationsTable'
import ScoreDistribution from './components/ScoreDistribution'
import { TrendingDown } from 'lucide-react'

function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-sm text-gray-500">Real-time credit risk intelligence and decisioning metrics</p>
        </div>
        <select className="px-4 py-2 bg-dark-surface border border-dark-border-light rounded-md text-white text-sm cursor-pointer outline-none hover:border-gray-600">
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <MetricCard
          title="Avg score"
          value="75%"
          change="-1% from last month"
          changeType="negative"
          chartData={[70, 72, 74, 73, 75, 74, 75]}
        />
        <MetricCard
          title="Avg process time of application"
          value="125K ms"
          change="+999% from last month"
          changeType="positive"
          chartData={[20, 25, 30, 40, 60, 90, 125]}
        />
      </div>
      
      <div className="grid grid-cols-4 gap-5 mb-8">
        <MetricCard
          title="Avg request amount"
          value="£200K"
          change="-1% from last month"
          changeType="negative"
        />
        <MetricCard
          title="Avg max amount"
          value="£154K"
          change="+3.2K% from last month"
          changeType="positive"
        />
        <MetricCard
          title="Avg approved amount"
          value="£140K"
          change="-1% from last month"
          changeType="negative"
        />
        <MetricCard
          title="Avg cost/application"
          value="£32"
          change="-1% from last month"
          changeType="negative"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-dark-panel border-2 border-dark-border rounded-lg p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-white mb-2">Total applications</h2>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-white">148.8K</span>
              <div className="flex items-center gap-1 text-xs font-medium text-red-400">
                <TrendingDown size={12} strokeWidth={2.5} />
                <span>-1% from last month</span>
              </div>
            </div>
          </div>
          <StackedBarChart
            data={[
              { label: 'Approved', value: 9.9, percentage: 60, color: '#4ade80' },
              { label: 'Rejected', value: 6.2, percentage: 20, color: '#f87171' },
              { label: 'Knocked out', value: 1.6, percentage: 10, color: '#fbbf24' },
              { label: 'Fraud', value: 1.8, percentage: 10, color: '#fb923c' },
            ]}
          />
        </div>

        <div className="bg-dark-panel border-2 border-dark-border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-white mb-5">Data Source Usage</h2>
          <DataSourceUsage />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-6">
        <div className="bg-dark-panel border-2 border-dark-border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-white mb-5">Credit Requested vs Approved</h2>
          <LineChart />
        </div>

        <div className="bg-dark-panel border-2 border-dark-border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-white mb-5">Applications Risk Distribution</h2>
          <RiskDistribution />
        </div>
      </div>

      <div className="bg-dark-panel border-2 border-dark-border rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-white">Latest applications</h2>
          <button className="px-4 py-2 bg-dark-surface border-2 border-dark-border-light rounded-md text-white text-sm font-semibold cursor-pointer transition-all hover:bg-dark-border hover:border-gray-600">
            View all
          </button>
        </div>
        <ApplicationsTable />
      </div>

      <div className="bg-dark-panel border-2 border-dark-border rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-bold text-white mb-5">Score Distribution</h2>
        <ScoreDistribution />
      </div>
    </div>
  )
}

export default Dashboard
