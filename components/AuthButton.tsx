"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  console.log("Session data:", session);
  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg"
      >
        Sign out ({session.user?.name})
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        aria-label="Sign in with GitHub"
        className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/7 transition"
      >
        {/* GitHub icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.14 7.64 10.62.56.1.76-.24.76-.53 0-.26-.01-1.12-.01-2.03-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1 .* 2.58.74 3.22.56.1-.44.39-.74.71-.91-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.62 1.52.24 2.64.12 2.92.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.1 5.52.4.34.76 1.02.76 2.06 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.77.53C19.05 20.89 22.25 16.7 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
        </svg>
        <span className="sr-only">Sign in with GitHub</span>
      </button>

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        aria-label="Sign in with Google"
        className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/7 transition"
      >
        {/* Google G icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.05 1.53 7.44 2.78l5.46-5.34C34.9 4.1 30.86 2.5 24 2.5 14.86 2.5 7.37 7.79 4.04 15.1l6.33 4.9C12.9 14.1 17.9 9.5 24 9.5z" />
          <path fill="#34A853" d="M46.5 24c0-1.6-.13-2.78-.4-4H24v8h12.7c-.55 3-2.8 6.2-6.7 8.3l6.5 5c4-3.7 6.4-9.3 6.4-17.6z" />
          <path fill="#4A90E2" d="M10.37 28.0c-.7-2.2-1.07-4.55-1.07-7 0-2.45.37-4.8 1.07-7L4.04 9.1C1.6 13.9 0 19.8 0 24c0 4.2 1.6 10.1 4.04 14.9l6.33-4.9z" />
          <path fill="#FBBC05" d="M24 46.5c6.86 0 10.9-2.6 14.2-5.6l-6.5-5C30.05 36.8 27.54 38 24 38c-6.1 0-11.1-4.6-13.63-10.5l-6.33 4.9C7.37 40.21 14.86 46.5 24 46.5z" />
        </svg>
        <span className="sr-only">Sign in with Google</span>
      </button>
    </div>
  );
}
