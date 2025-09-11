import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import GlassCard from "../components/GlassCard";
import Brand from "../components/Brand";
import { brand, neonGradient } from "../theme";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => setError(""), [email, password]);

  return (
    <main className={`min-h-screen text-white ${neonGradient} bg-[#0A0B0F]`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          <div className="space-y-6">
            <Brand size={40} />
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Acesso ao painel{" "}
              <span style={{ color: brand.colors.secondary }}>
                {brand.name}
              </span>
            </h1>
            <p className="text-white/70 max-w-prose">
              Centralize e distribua seus formulários Jotform por cliente.
            </p>
          </div>
          <GlassCard className="md:ml-auto">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                const ok = await login(email, password);
                setLoading(false);
                if (!ok) setError("Credenciais inválidas");
              }}
              className="space-y-4"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-400"
                placeholder="voce@empresa.com"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-400"
                placeholder="••••••••"
              />
              {error && <p className="text-rose-400 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold border border-white/10 hover:border-white/20"
                style={{
                  background: `linear-gradient(90deg, ${brand.colors.primary}, ${brand.colors.secondary})`,
                }}
              >
                {loading ? "Entrando…" : "Entrar"}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
