"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Sign in to DevSync</h1>
        <p className="text-sm text-slate-300 mb-6">Continue with your GitHub account to join your team and collaborate in real-time.</p>

        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-black text-white px-4 py-2 font-medium hover:brightness-110 transition"
        >
          Sign in with GitHub
        </button>

        <div className="mt-4 text-sm text-slate-400">Or use another provider</div>
      </div>
    </main>
  );
}
