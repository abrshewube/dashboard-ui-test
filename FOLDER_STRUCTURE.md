# Project Folder Structure



```
src/
├── app/                          # App-level configuration
│   └── App.jsx                   # Main app component with routing
│
├── features/                     # Feature-based modules
│   ├── dashboard/                # Dashboard feature
│   │   ├── components/           # Dashboard-specific components
│   │   │   ├── ApplicationsTable.jsx
│   │   │   ├── DataSourceUsage.jsx
│   │   │   ├── LineChart.jsx
│   │   │   ├── MetricCard.jsx
│   │   │   ├── RiskDistribution.jsx
│   │   │   ├── ScoreDistribution.jsx
│   │   │   └── StackedBarChart.jsx
│   │   └── Dashboard.jsx         # Dashboard page
│   │
│   ├── workflow/                 # Workflow Builder feature
│   │   ├── components/           # Workflow-specific components
│   │   │   ├── BuildingBlocks.jsx
│   │   │   ├── CreditEnginePanel.jsx
│   │   │   └── WorkflowCanvas.jsx
│   │   └── WorkflowBuilder.jsx   # Workflow Builder page
│   │
│   └── monitoring/               # Monitoring feature
│       └── Monitoring.jsx        # Monitoring page
│
├── shared/                       # Shared resources
│   ├── components/               # Reusable components
│   │   ├── layout/               # Layout components
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Sidebar.css
│   │   │   └── TopBar.jsx
│   │
│   │
│   └── styles/                   # Global styles
│       └── index.css             # Main stylesheet
│
└── main.jsx                      # Application entry point
```

## Structure Benefits

1. **Feature-based organization**: Each feature has its own folder with components and pages
2. **Shared resources**: Common components and styles are in the `shared` folder
3. **Scalability**: Easy to add new features without cluttering the structure
4. **Maintainability**: Clear separation of concerns makes it easier to find and update code
5. **Reusability**: Shared components can be easily imported across features

## Import Paths

- **App imports**: `../shared/components/layout/Layout`
- **Feature imports**: Relative paths within the feature folder
- **Shared imports**: `../../shared/components/layout/Layout`
- **Global styles**: `../../shared/styles/index.css`

