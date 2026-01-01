function RiskDistribution() {
  const risks = [
    { label: 'Very low', percentage: 10, color: '#22c55e' },
    { label: 'Low', percentage: 60, color: '#22c55e' },
    { label: 'Medium', percentage: 25, color: '#22c55e' },
    { label: 'High', percentage: 5, color: '#22c55e' },
  ]

  return (
    <div className="flex flex-col gap-5 mt-5">
      {risks.map((risk, index) => (
        <div key={index} className="grid grid-cols-[100px_1fr_50px] gap-4 items-center">
          <div className="text-sm text-gray-300 capitalize">{risk.label}</div>
          <div className="h-6 bg-dark-border rounded overflow-hidden">
            <div
              className="h-full rounded transition-all duration-300"
              style={{
                width: `${risk.percentage}%`,
                backgroundColor: risk.color,
              }}
            />
          </div>
          <div className="text-sm text-white font-medium text-right">{risk.percentage}%</div>
        </div>
      ))}
    </div>
  )
}

export default RiskDistribution
