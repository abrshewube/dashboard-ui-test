function LineChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  // Updated data to match the image: starts ~5M, peaks ~70M in April, dips, rises to 100M+, then to 150M+
  const requestedData = [5, 15, 30, 70, 60, 50, 55, 105, 110, 95, 120, 155]
  const approvedData = [4, 12, 25, 60, 52, 40, 55, 100, 105, 90, 115, 150]

  const maxValue = 150
  const chartHeight = 200
  const chartWidth = 600
  const paddingLeft = 50
  const paddingBottom = 30

  const getY = (value) => chartHeight - paddingBottom - (value / maxValue) * (chartHeight - paddingBottom)
  const getX = (index) => paddingLeft + (index * (chartWidth - paddingLeft)) / (months.length - 1)

  // Y-axis values: £1 M, £10 M, £50 M, £100 M, £150 M
  const yAxisValues = [1, 10, 50, 100, 150]

  return (
    <div className="mt-5">
      <svg width="100%" height={chartHeight + 30} viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`} className="overflow-visible">
        <defs>
          <linearGradient id="approvedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Vertical grid lines */}
        {months.map((_, i) => (
          <line
            key={i}
            x1={getX(i)}
            y1="0"
            x2={getX(i)}
            y2={chartHeight - paddingBottom}
            stroke="#404040"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}

        {/* Approved area fill */}
        <polygon
          points={`${paddingLeft},${chartHeight - paddingBottom} ${approvedData.map((val, i) => `${getX(i)},${getY(val)}`).join(' ')} ${getX(months.length - 1)},${chartHeight - paddingBottom}`}
          fill="url(#approvedGradient)"
        />

        {/* Requested line - dashed white */}
        <polyline
          points={requestedData.map((val, i) => `${getX(i)},${getY(val)}`).join(' ')}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        {/* Approved line - solid teal-green */}
        <polyline
          points={approvedData.map((val, i) => `${getX(i)},${getY(val)}`).join(' ')}
          fill="none"
          stroke="#5eead4"
          strokeWidth="2"
        />

        {/* July highlight - vertical dotted line */}
        <line
          x1={getX(6)}
          y1="0"
          x2={getX(6)}
          y2={chartHeight - paddingBottom}
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.6"
        />

        {/* July tooltip background */}
        <rect
          x={getX(6) - 60}
          y={getY(approvedData[6]) - 35}
          width="55"
          height="28"
          fill="#86efac"
          rx="4"
          opacity="0.9"
        />

        {/* July tooltip text */}
        <text
          x={getX(6) - 32}
          y={getY(approvedData[6]) - 20}
          fill="#000"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          July 2027
        </text>
        <text
          x={getX(6) - 32}
          y={getY(approvedData[6]) - 8}
          fill="#000"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          £ 55 M
        </text>

        {/* July data point circle */}
        <circle
          cx={getX(6)}
          cy={getY(approvedData[6])}
          r="5"
          fill="#1e1e1e"
          stroke="#ffffff"
          strokeWidth="2"
        />

        {/* X-axis labels */}
        {months.map((month, i) => (
          <text
            key={i}
            x={getX(i)}
            y={chartHeight - 5}
            fill="#9ca3af"
            fontSize="11"
            textAnchor="middle"
          >
            {month}
          </text>
        ))}

        {/* Y-axis labels with £ symbol */}
        {yAxisValues.map((value) => {
          const y = getY(value)
          return (
            <text
              key={value}
              x="5"
              y={y + 4}
              fill="#9ca3af"
              fontSize="11"
              textAnchor="start"
            >
              £{value} M
            </text>
          )
        })}
      </svg>

      {/* Legend at bottom left */}
      <div className="flex gap-6 mt-4">
        <div className="flex items-center gap-2 text-xs text-white">
          <div className="w-8 h-0.5 border-t-2 border-dashed border-white"></div>
          <span>Requested</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-white">
          <div className="w-8 h-0.5 bg-[#5eead4]"></div>
          <span>Approved</span>
        </div>
      </div>
    </div>
  )
}

export default LineChart
