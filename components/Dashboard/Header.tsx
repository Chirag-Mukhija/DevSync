"use client";
import { signOut } from "next-auth/react";
export default function Header({ user }:any) {
  return (
    
    <div>
    <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/6 px-4 py-3">
      <div>
        <h2 className="text-base font-semibold">Dashboard</h2>
        <div className="text-xs text-slate-400">Overview & workspaces</div>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={user?.image || "/default-avatar.png"}
          alt="user"
          className="w-9 h-9 rounded-full ring-1 ring-white/10"
        />
        <button
          onClick={() => signOut()}
          className="text-sm rounded-md bg-white/6 px-3 py-1 hover:bg-white/8 transition"
        >
          Sign out
        </button>
      </div>
    </div>
    </div>
  );
}
