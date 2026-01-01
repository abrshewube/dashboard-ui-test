import { Check, X } from 'lucide-react'

function ApplicationsTable() {
  const applications = [
    { id: 'APP-2847', applicant: 'Elnoor', requested: '12,000', approved: '11,000', risk: 'Low', status: 'Approved', time: '2 mins ago' },
    { id: 'APP-2846', applicant: 'Elsharq trading', requested: '15,000', approved: '13,000', risk: 'High', status: 'Rejected', time: '2 mins ago' },
    { id: 'APP-2845', applicant: 'Elngar for electric supplies', requested: '17,000', approved: '14,000', risk: 'Medium', status: 'Approved', time: '2 mins ago' },
    { id: 'APP-2844', applicant: 'Astra for pharmacology', requested: '20,000', approved: '15,000', risk: 'Low', status: 'Approved', time: '2 mins ago' },
    { id: 'APP-2843', applicant: 'IST teoghno', requested: '24,000', approved: '16,000', risk: 'Low', status: 'Approved', time: '2 mins ago' },
  ]

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return '#22c55e'
      case 'Medium': return '#f59e0b'
      case 'High': return '#ef4444'
      default: return '#888'
    }
  }

  return (
    <div className="mt-5">
      <table className="w-full border-collapse">
        <thead className="bg-dark-surface border-b-2 border-dark-border">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Application ID</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Applicant</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Requested</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Approved</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Risk</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Time</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index} className="border-b-2 border-dark-border hover:bg-dark-surface transition-colors">
              <td className="px-4 py-4 text-sm font-medium text-white">{app.id}</td>
              <td className="px-4 py-4 text-sm font-medium text-white">{app.applicant}</td>
              <td className="px-4 py-4 text-sm font-medium text-white">£{app.requested}</td>
              <td className="px-4 py-4 text-sm font-medium text-white">£{app.approved}</td>
              <td className="px-4 py-4 text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: getRiskColor(app.risk) }}
                  />
                  <span style={{ color: getRiskColor(app.risk) }}>{app.risk}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-sm">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold ${
                  app.status === 'Approved' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {app.status === 'Approved' ? (
                    <Check size={12} className="text-white" />
                  ) : (
                    <X size={12} className="text-white" />
                  )}
                  {app.status}
                </span>
              </td>
              <td className="px-4 py-4 text-sm font-medium text-white">{app.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-6">
        <button className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
          &lt; Prev
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, '...', 10].map((page, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-md text-sm cursor-pointer transition-all ${
                page === 1
                  ? 'bg-dark-surface border border-dark-border-light text-white'
                  : 'bg-transparent border-none text-gray-400 hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
          Next &gt;
        </button>
      </div>
    </div>
  )
}

export default ApplicationsTable
