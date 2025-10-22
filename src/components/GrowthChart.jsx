import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { week: "W1", value: 65 },
  { week: "W2", value: 78 },
  { week: "W3", value: 72 },
  { week: "W4", value: 85 },
];

export default function GrowthChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-soft)] flex flex-col gap-3">
      <h3 className="text-sm font-medium text-gray-600">Spiritual Growth Trends Over Time</h3>
      <p className="text-xl font-semibold text-gray-800">Avg. 75%</p>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
