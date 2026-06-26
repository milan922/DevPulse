"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/", icon: "📊" },
  { label: "Repositories", href: "/repos", icon: "📁" },
  { label: "Pull Requests", href: "/prs", icon: "🔀" },
  { label: "AI Insights", href: "/insights", icon: "🤖" },
  { label: "Team", href: "/team", icon: "👥" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
            DP
          </div>
          <span className="text-lg font-semibold text-slate-900">DevPulse</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Developer Analytics</p>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-600 font-medium">
            U
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700">User</p>
            <p className="text-xs text-slate-400">Not signed in</p>
          </div>
        </div>
      </div>
    </aside>
  );
}