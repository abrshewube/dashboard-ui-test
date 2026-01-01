function StackedBarChart({ data }) {
  return (
    <div className="mt-5">
      <div className="flex h-8 rounded overflow-hidden mb-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-full"
            style={{
              width: `${item.percentage}%`,
              backgroundColor: item.color,
            }}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-sm">
            <div
              className="w-1 h-4 flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="flex-1 text-gray-300">{item.label} - {item.value}K</span>
            <span className="text-gray-500 text-xs">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackedBarChart
