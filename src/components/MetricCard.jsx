export default function MetricCard({ title, value, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-soft)] flex flex-col items-start gap-2">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
}
