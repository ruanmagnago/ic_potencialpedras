import React from "react";
import Brand from "./Brand";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Brand />
        <div className="flex items-center gap-3">
          {user && (
            <span className="text-xs text-white/60 hidden sm:block">
              {user.email}
            </span>
          )}
          {user && (
            <button
              onClick={logout}
              className="px-3 py-1.5 rounded-xl text-sm border border-white/10 hover:border-white/20"
            >
              Sair
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
