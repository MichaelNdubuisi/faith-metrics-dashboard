function MetricCard({ title, value, color, description }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 w-64 transition-transform hover:scale-105">
      <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-white text-2xl font-bold`}>
        {value}
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-700">{title}</h2>
      <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}

export default MetricCard;
