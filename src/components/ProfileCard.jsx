export default function ProfileCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-soft)] text-center flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-700">JD</div>
      <h3 className="mt-3 font-semibold">John Doe</h3>
      <p className="text-sm text-gray-500">Team Lead • Faith Metrics Project</p>
      <button className="mt-4 bg-[var(--color-primary)] text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700">Edit Profile</button>
    </div>
  );
}
