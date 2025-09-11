import React, { useState } from "react";
import { forms } from "../forms";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function FormsPage() {
  const navigate = useNavigate();
  const [activeFormPreview, setActiveFormPreview] = useState(null);
  const [activeFormAnswer, setActiveFormAnswer] = useState(null);

  const copyLink = (path) => {
    const url = `${window.location.origin}${path}`;
    navigator.clipboard.writeText(url);
    alert("🔗 Link copiado!\n" + url);
  };

  return (
    <div
      className={`min-h-screen text-white bg-[#0A0B0F] 
      bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,179,255,0.30),transparent),
      radial-gradient(800px_400px_at_10%_110%,rgba(124,77,255,0.25),transparent),
      radial-gradient(900px_500px_at_90%_120%,rgba(0,229,168,0.25),transparent)]`}
    >
      <Header />

      <main className="max-w-6xl mx-auto py-5 px-5 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {forms
            .slice()
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map((form) => (
              <div
                key={form.id}
                className="rounded-2xl bg-white/5 border border-white/10 
              shadow-[0_0_30px_rgba(0,179,255,0.2)] p-6 flex flex-col gap-4"
              >
                <h2 className="text-lg font-semibold">{form.nome}</h2>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => navigate(form.path)}
                    className="flex-1 px-3 py-2 rounded-xl text-sm font-medium
                  border border-white/10 hover:border-white/20 transition"
                  >
                    Abrir
                  </button>
                  <button
                    onClick={() => setActiveFormPreview(form)}
                    className="flex-1 px-3 py-2 rounded-xl text-sm font-medium
                  border border-white/10 hover:border-white/20 transition"
                  >
                    Pré-visualizar
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyLink(form.path)}
                    className="flex-1 px-3 py-2 rounded-xl text-sm font-medium
                  border border-white/10 hover:border-white/20 transition
                  bg-gradient-to-r from-[#00E5A8] to-[#00B3FF]"
                  >
                    Copiar Link
                  </button>
                  {/* <button
                  onClick={() => navigate(form.path)}
                  className="flex-1 px-3 py-2 rounded-xl text-sm font-medium
                  border border-white/10 hover:border-white/20 transition"
                >
                  Respostas
                </button> */}
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* Modal preview */}
      {activeFormPreview && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-[#0F1117] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-semibold">{activeFormPreview.nome}</h3>
              <button
                onClick={() => setActiveFormPreview(null)}
                className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-sm"
              >
                Fechar
              </button>
            </div>
            <iframe
              src={window.location.origin + activeFormPreview.path}
              title={activeFormPreview.nome}
              className="flex-1 w-full bg-black"
            />
          </div>
        </div>
      )}
      {/* Modal respostas */}
      {activeFormAnswer && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-[#0F1117] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-semibold">{activeFormAnswer.nome}</h3>
              <button
                onClick={() => setActiveForm(null)}
                className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-sm"
              >
                Fechar
              </button>
            </div>
            <iframe
              src={window.location.origin + activeFormAnswer.path}
              title={activeFormAnswer.nome}
              className="flex-1 w-full bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
