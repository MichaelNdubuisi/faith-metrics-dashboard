import MetricCard from "./MetricCard";
import { metrics } from "../data/metrics";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Faith Metrics Dashboard
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
