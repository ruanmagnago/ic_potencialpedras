import React, { useState, useMemo } from "react";
import { forms } from "../forms";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ResponsesTable from "./ResponsesTable";

export default function FormsPage() {
  const navigate = useNavigate();
  const [activeFormPreview, setActiveFormPreview] = useState(null);
  const [activeFormAnswer, setActiveFormAnswer] = useState(null);

  const copyLink = (path) => {
    const url = `${window.location.origin}${path}`;
    navigator.clipboard.writeText(url);
    alert("🔗 Link copiado!\n" + url);
  };

  const groupedForms = useMemo(() => {
    const groups = {};
    forms
      .slice()
      .sort((a, b) => a.nome.localeCompare(b.nome))
      .forEach((form) => {
        const group = form.group || "Outros";
        if (!groups[group]) groups[group] = [];
        groups[group].push(form);
      });
    return groups;
  }, []);

  return (
    <div
      className={`min-h-screen text-white bg-[#0A0B0F]
      bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,179,255,0.30),transparent),
      radial-gradient(800px_400px_at_10%_110%,rgba(124,77,255,0.25),transparent),
      radial-gradient(900px_500px_at_90%_120%,rgba(0,229,168,0.25),transparent)]`}
    >
      <Header />

      <main className="max-w-6xl mx-auto py-5 px-5 pb-12 space-y-10">
        {/* Percorre grupos */}
        {Object.entries(groupedForms).map(([groupName, groupForms]) => (
          <section key={groupName}>
            <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">
              {groupName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupForms.map((form) => (
                <div
                  key={form.id}
                  className="rounded-2xl bg-white/5 border border-white/10 
                  shadow-[0_0_30px_rgba(0,179,255,0.2)] p-6 flex flex-col gap-4 justify-between"
                >
                  <h3 className="text-lg font-semibold">{form.nome}</h3>

                  {form.path ? (
                    <>
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
                        {form.formId && (
                          <button
                            onClick={() => setActiveFormAnswer(form)}
                            className="flex-1 px-3 py-2 rounded-xl text-sm font-medium
                  border border-white/10 hover:border-white/20 transition bg-purple-600/40"
                          >
                            Respostas
                          </button>
                        )}
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
                      </div>
                    </>
                  ) : (
                    <div className="flex">
                      <a
                        href={form.link}
                        target={
                          form.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noreferrer"
                        className="flex-1 px-3 py-2 rounded-xl text-sm font-medium text-center
                        border border-white/10 hover:border-white/20 transition
                        bg-gradient-to-r from-[#00E5A8] to-[#00B3FF]"
                      >
                        Acessar
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
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

      {/* Modal futurista para respostas */}
      {activeFormAnswer && (
        <ResponsesTable
          formId={activeFormAnswer.formId}
          onClose={() => setActiveFormAnswer(null)}
        />
      )}
    </div>
  );
}
