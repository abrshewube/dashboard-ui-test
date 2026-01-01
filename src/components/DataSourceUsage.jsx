function DataSourceUsage() {
  const sources = [
    { name: 'Wathq', used: 1580, total: 10000 },
    { name: 'Simah', used: 4580, total: 10000 },
    { name: 'Bayan', used: 2417, total: 10000 },
    { name: 'Qawaem', used: 2417, total: 10000 },
    { name: 'Toot', used: 2417, total: 10000 },
  ]

  return (
    <div className="flex flex-col gap-4 mt-5">
      {sources.map((source, index) => {
        const percentage = (source.used / source.total) * 100
        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300 font-medium">{source.name}</span>
              <span className="text-white font-medium">{source.used.toLocaleString()}/{source.total.toLocaleString()}</span>
            </div>
            <div className="w-full h-1 bg-dark-border rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DataSourceUsage
