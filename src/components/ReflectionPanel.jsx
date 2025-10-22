export default function ReflectionPanel() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-soft)] mt-8">
      <h3 className="font-semibold mb-4">Reflection Panel</h3>
      <textarea
        placeholder="Share your daily reflection..."
        className="w-full border border-gray-200 rounded-lg p-3 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
      />
      <div className="flex justify-end mt-3">
        <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Submit</button>
      </div>
    </div>
  );
}
