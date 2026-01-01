import React, { useMemo } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

function MetricCard({ title, value, change, changeType, chartData }) {
  const gradientId = useMemo(() => `gradient-${title.replace(/\s+/g, '-')}`, [title])
  
  const maxValue = chartData ? Math.max(...chartData) : 0
  const minValue = chartData ? Math.min(...chartData) : 0
  const range = maxValue - minValue || 1
  
  const generateAreaPath = () => {
    if (!chartData) return ''
    const points = chartData.map((val, i) => {
      const x = (i / (chartData.length - 1)) * 200
      const y = 40 - ((val - minValue) / range) * 32
      return `${x},${y}`
    })
    const firstPoint = points[0]
    const lastPoint = points[points.length - 1]
    return `M ${firstPoint.split(',')[0]},40 L ${firstPoint} ${points.join(' L ')} L ${lastPoint.split(',')[0]},40 Z`
  }

  const getLastPointX = () => {
    if (!chartData) return 0
    return ((chartData.length - 1) / (chartData.length - 1)) * 200
  }

  const getLastPointY = () => {
    if (!chartData) return 0
    const lastVal = chartData[chartData.length - 1]
    return 40 - ((lastVal - minValue) / range) * 32
  }

  return (
    <div className="bg-dark-panel border-2 border-dark-border rounded-lg p-5 relative overflow-hidden shadow-sm">
      <div 
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          background: 'linear-gradient(to bottom right, transparent 0%, transparent 40%, rgba(94, 234, 212, 0.15) 70%, rgba(94, 234, 212, 0.25) 100%)'
        }}
      ></div>
      <div className="flex justify-between items-start relative z-10">
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 capitalize">{title}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className={`text-xs font-medium flex items-center gap-1 ${changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
              {changeType === 'positive' ? (
                <TrendingUp size={12} strokeWidth={2.5} />
              ) : (
                <TrendingDown size={12} strokeWidth={2.5} />
              )}
              <span>{change}</span>
            </div>
          </div>
        </div>
        {chartData && (
          <div className="w-24 h-16 ml-4 flex-shrink-0 relative">
            <svg width="96" height="64" viewBox="0 0 200 40" className="w-full h-full">
              <defs>
                <linearGradient id={`${gradientId}-area`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5eead4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#5eead4" stopOpacity="0.05" />
                </linearGradient>
                <radialGradient id={`${gradientId}-glow`} cx="100%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#5eead4" stopOpacity="0.8" />
                  <stop offset="40%" stopColor="#5eead4" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#5eead4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d={generateAreaPath()}
                fill={`url(#${gradientId}-area)`}
                stroke="none"
              />
              <path
                d={generateAreaPath()}
                fill={`url(#${gradientId}-glow)`}
                stroke="none"
              />
              <polyline
                points={chartData.map((val, i) => {
                  const x = (i / (chartData.length - 1)) * 200
                  const y = 40 - ((val - minValue) / range) * 32
                  return `${x},${y}`
                }).join(' ')}
                fill="none"
                stroke="#5eead4"
                strokeWidth="1.5"
              />
              <line
                x1={getLastPointX()}
                y1={getLastPointY()}
                x2={getLastPointX()}
                y2="40"
                stroke="#9ca3af"
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default MetricCard
