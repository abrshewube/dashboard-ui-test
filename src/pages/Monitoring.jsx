import MetricCard from '../components/MetricCard'
import StackedBarChart from '../components/StackedBarChart'
import DataSourceUsage from '../components/DataSourceUsage'
import LineChart from '../components/LineChart'
import RiskDistribution from '../components/RiskDistribution'
import ApplicationsTable from '../components/ApplicationsTable'
import ScoreDistribution from '../components/ScoreDistribution'

function Monitoring() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white">Monitoring</h1>
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
          change="+3.20% from last month"
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
          change="-7% from last month"
          changeType="negative"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-dark-panel border border-dark-border rounded-xl p-6">
          <div className="flex justify-between items-start mb-5">
            <h2 className="text-lg font-semibold text-white">Total applications</h2>
            <div className="flex flex-col items-end gap-1">
              <span className="text-2xl font-semibold text-white">148.8K</span>
              <span className="text-xs font-medium text-red-500">-1% from last month</span>
            </div>
          </div>
          <StackedBarChart
            data={[
              { label: 'Approved', value: 9.9, percentage: 60, color: '#22c55e' },
              { label: 'Rejected', value: 6.2, percentage: 20, color: '#ef4444' },
              { label: 'Knocked out', value: 1.6, percentage: 10, color: '#f59e0b' },
              { label: 'Fraud', value: 1.8, percentage: 10, color: '#fb923c' },
            ]}
          />
        </div>

        <div className="bg-dark-panel border border-dark-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-5">Data Source Usage</h2>
          <DataSourceUsage />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-dark-panel border border-dark-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-5">Credit Requested vs Approved</h2>
          <LineChart />
        </div>

        <div className="bg-dark-panel border border-dark-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-5">Applications Risk Distribution</h2>
          <RiskDistribution />
        </div>
      </div>

      <div className="bg-dark-panel border border-dark-border rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-white">Latest applications</h2>
          <button className="px-4 py-2 bg-dark-surface border border-dark-border-light rounded-md text-white text-sm cursor-pointer transition-all hover:bg-dark-border hover:border-gray-600">
            View all
          </button>
        </div>
        <ApplicationsTable />
      </div>

      <div className="bg-dark-panel border border-dark-border rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-5">Score Distribution</h2>
        <ScoreDistribution />
      </div>
    </div>
  )
}

export default Monitoring
