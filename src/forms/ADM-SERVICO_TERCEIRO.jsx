import React from "react";
import Header from "../components/Header";

export default function Form_PrestacaoServicoTerceiro() {
  return (
    <>
      <div
        className={`min-h-screen text-white bg-[#0A0B0F] 
      bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,179,255,0.30),transparent),
      radial-gradient(800px_400px_at_10%_110%,rgba(124,77,255,0.25),transparent),
      radial-gradient(900px_500px_at_90%_120%,rgba(0,229,168,0.25),transparent)]`}
      >
        <Header />

        <iframe
          id="JotFormIFrame-251276700669058"
          title="ADM-PRESTAÇÃO DE SERVIÇO - EM TERCEIROS"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/potencial_pedras/servico_em_terceiro"
          frameborder="0"
          className="min-w-full max-w-full h-[80vh] border-2 border-neutral-700 "
        ></iframe>
        <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
      </div>
    </>
  );
}
