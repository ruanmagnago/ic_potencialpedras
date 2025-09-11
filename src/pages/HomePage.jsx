import React, { useEffect, useState, useMemo } from "react";
import Header from "../components/Header";
import Brand from "../components/Brand";
import GlassCard from "../components/GlassCard";
import { useAuth } from "../context/AuthContext";
import { brand, neonGradient } from "../theme";

export default function HomePage() {
  const { logout } = useAuth();
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeForm, setActiveForm] = useState(null);
  const hostname = window.location.hostname;

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch("/forms");
        const data = await resp.json();
        setForms(Array.isArray(data) ? data : []);
      } catch {
        setForms([
          {
            id: "111",
            title: "Demo Form",
            url: "https://form.jotform.com/demo",
          },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    if (!query) return forms;
    return forms.filter((f) =>
      f.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [forms, query]);

  return (
    <div className={`min-h-screen text-white ${neonGradient} bg-[#0A0B0F]`}>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between mb-6">
          <div>
            <Brand />
            <h2 className="mt-3 text-2xl font-bold">Formulários</h2>
            <p className="text-white/70 text-sm">Domínio: {hostname}</p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar…"
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
          />
        </div>
        {loading ? (
          <p>Carregando…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((form) => (
              <GlassCard key={form.id}>
                <h3 className="font-semibold text-lg">{form.title}</h3>
                <a
                  href={form.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 px-3 py-2 rounded-xl border border-white/10 hover:border-white/20"
                  style={{
                    background: `linear-gradient(90deg, ${brand.colors.primary}, ${brand.colors.secondary})`,
                  }}
                >
                  Abrir
                </a>
              </GlassCard>
            ))}
          </div>
        )}
      </main>
      <script
        type="text/javascript"
        src="https://form.jotform.com/jsform/252453983769070"
      ></script>
    </div>
  );
}
