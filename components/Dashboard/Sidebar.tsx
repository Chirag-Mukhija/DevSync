export default function Sidebar() {
  return (
    <div className="w-64 p-4">
      <div className="h-screen px-3 py-2 bg-white/5 border border-white/6 p-4">
        <h2 className="text-lg font-semibold mb-4">DevSync</h2>
        <nav className="flex flex-col gap-3 text-slate-300">
          <a href="/dashboard" className="block rounded-md px-3 py-2 hover:bg-white/6">Dashboard</a>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-white/6">My Workspaces</a>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-white/6">Settings</a>
        </nav>
      </div>
    </div>
  );
}
