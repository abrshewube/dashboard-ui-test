function ScoreDistribution() {
  const scoreRanges = [
    { range: '0-10', value: 20 },
    { range: '10-20', value: 150 },
    { range: '20-30', value: 80 },
    { range: '30-40', value: 180 },
    { range: '40-50', value: 160 },
    { range: '50-60', value: 250 },
    { range: '60-70', value: 170 },
    { range: '70-80', value: 165 },
    { range: '80-90', value: 90 },
    { range: '90-100', value: 190 },
  ]

  const maxValue = Math.max(...scoreRanges.map(r => r.value))
  const chartHeight = 180
  const chartWidth = 950
  const barWidth = 45
  const barSpacing = 50
  const startX = 60

  const getBarHeight = (value) => (value / maxValue) * chartHeight
  const getBarColor = (value) => {
    const ratio = value / maxValue
    // Create gradient from light green to dark green
    if (ratio > 0.8) return '#16a34a' // dark green
    if (ratio > 0.6) return '#22c55e' // medium-dark green
    if (ratio > 0.4) return '#4ade80' // medium green
    if (ratio > 0.2) return '#86efac' // light-medium green
    return '#bbf7d0' // very light green
  }

  // Find the 50-60 bar index for highlighting
  const highlightIndex = scoreRanges.findIndex(r => r.range === '50-60')
  const highlightX = startX + highlightIndex * (barWidth + barSpacing) + barWidth / 2
  const highlightY = chartHeight - getBarHeight(scoreRanges[highlightIndex].value)

  return (
    <div className="mt-5">
      <div className="w-full overflow-x-auto">
        <svg width="100%" height="240" viewBox={`0 0 ${chartWidth} 240`} className="min-w-[950px]">
          <defs>
            <linearGradient id="legendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bbf7d0" />
              <stop offset="25%" stopColor="#86efac" />
              <stop offset="50%" stopColor="#4ade80" />
              <stop offset="75%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>

          {/* Bars with background placeholders */}
          {scoreRanges.map((range, index) => {
            const x = startX + index * (barWidth + barSpacing)
            const height = getBarHeight(range.value)
            const y = chartHeight - height
            const color = getBarColor(range.value)

            return (
              <g key={index}>
                {/* Dark gray background rectangle (max height) */}
                <rect
                  x={x}
                  y={0}
                  width={barWidth}
                  height={chartHeight}
                  fill="#2a2a2a"
                  rx="4"
                />
                {/* Green bar */}
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={height}
                  fill={color}
                  rx="4"
                />
                {/* White line at top of bar */}
                <line
                  x1={x}
                  y1={y}
                  x2={x + barWidth}
                  y2={y}
                  stroke="white"
                  strokeWidth="1"
                />
                {/* X-axis label */}
                <text
                  x={x + barWidth / 2}
                  y={chartHeight + 20}
                  fill="#888"
                  fontSize="11"
                  textAnchor="middle"
                >
                  {range.range}
                </text>
              </g>
            )
          })}

          {/* Highlight for 50-60 bar */}
          <line
            x1={highlightX}
            y1={0}
            x2={highlightX}
            y2={chartHeight}
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Circle at top of highlight line */}
          <circle cx={highlightX} cy={highlightY} r="5" fill="white" />
          <circle cx={highlightX} cy={highlightY} r="3" fill="#14b8a6" />
          {/* Value label */}
          <text
            x={highlightX + 10}
            y={highlightY - 5}
            fill="white"
            fontSize="12"
            fontWeight="600"
          >
            250
          </text>

          {/* X-axis label */}
          <text
            x={chartWidth / 2}
            y={chartHeight + 40}
            fill="#888"
            fontSize="12"
            textAnchor="middle"
          >
            Score Range
          </text>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <span className="text-xs text-gray-500">Fewer Applicants</span>
        <div className="flex gap-1">
          <div className="w-12 h-4 rounded" style={{ backgroundColor: '#bbf7d0' }}></div>
          <div className="w-12 h-4 rounded" style={{ backgroundColor: '#86efac' }}></div>
          <div className="w-12 h-4 rounded" style={{ backgroundColor: '#4ade80' }}></div>
          <div className="w-12 h-4 rounded" style={{ backgroundColor: '#22c55e' }}></div>
          <div className="w-12 h-4 rounded" style={{ backgroundColor: '#16a34a' }}></div>
        </div>
        <span className="text-xs text-gray-500">More Applicants</span>
      </div>
    </div>
  )
}

export default ScoreDistribution
