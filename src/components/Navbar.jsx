import { Share2, Settings, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-[var(--shadow-soft)] px-8 py-3 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
        <h1 className="text-lg font-semibold text-gray-800">FaithApp</h1>
      </div>

      {/* Center Section - Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-[var(--color-primary)] transition">Dashboard</a>
        <a href="#" className="hover:text-[var(--color-primary)] transition">Resources</a>
        <a href="#" className="hover:text-[var(--color-primary)] transition">Profile</a>
      </nav>

      {/* Right Section - Action Buttons */}
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-[var(--color-primary)] transition">
          <Share2 className="w-4 h-4" />
          <span className="hidden sm:inline">Share</span>
        </button>

        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-[var(--color-primary)] transition">
          <Settings className="w-4 h-4" />
          <span className="hidden sm:inline">Settings</span>
        </button>

        <button className="relative text-gray-700 hover:text-[var(--color-primary)] transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
