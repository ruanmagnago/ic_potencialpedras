import React, { useEffect, useState } from "react";

export default function ResponsesTable({ formId, onClose }) {
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_JOTFORM_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(API_KEY);
        setLoading(true);
        const res = await fetch(
          `https://api.jotform.com/form/${formId}/submissions?apiKey=${API_KEY}`
        );
        const data = await res.json();
        if (data?.content) {
          setSubmissions(data.content);
        } else {
          setError("Nenhuma resposta encontrada.");
        }
      } catch (err) {
        setError("Erro ao carregar respostas.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [formId]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0F1117] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-purple-600/20">
          <h3 className="font-semibold">Respostas</h3>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-sm"
          >
            Fechar
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {loading && <p className="text-white/70">Carregando...</p>}
          {error && <p className="text-red-400">{error}</p>}
          {!loading && !error && submissions.length > 0 && (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-2 border border-white/10">ID</th>
                  <th className="p-2 border border-white/10">Data</th>
                  <th className="p-2 border border-white/10">Respostas</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-white/5">
                    <td className="p-2 border border-white/10">{sub.id}</td>
                    <td className="p-2 border border-white/10">
                      {new Date(sub.created_at).toLocaleString()}
                    </td>
                    <td className="p-2 border border-white/10 text-left">
                      <ul className="list-disc list-inside text-white/80">
                        {Object.values(sub.answers).map((ans, i) => (
                          <li key={i}>
                            <span className="font-semibold">{ans.text}: </span>
                            {ans.answer}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
