import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin"); // not logged in
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex h-screen">
        <aside className="w-64 shrink-0 bg-transparent p-6">
          <Sidebar />
        </aside>

        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto">
            <Header user={user} />

            <main className="mt-6">
              <div className="rounded-2xl bg-white/5 border border-white/6 p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-extrabold">Welcome back, {user?.name}</h1>
                    <p className="text-sm text-slate-300 mt-1">{user?.email}</p>
                  </div>

                  <div>
                    <button className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow hover:scale-[1.01] transition">
                      Create Workspace
                    </button>
                  </div>
                </div>
              </div>

              <section className="mt-6 grid grid-cols-1 gap-6">
                <div className="rounded-2xl bg-white/4 border border-white/6 p-6">
                  <h2 className="text-lg font-semibold">Recent projects</h2>
                  <p className="text-sm text-slate-300 mt-2">No projects yet — create a workspace to get started.</p>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
