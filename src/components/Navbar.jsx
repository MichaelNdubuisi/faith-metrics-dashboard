function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        Faith Metrics
      </h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all">
        + Add Metric
      </button>
    </nav>
  );
}

export default Navbar;
