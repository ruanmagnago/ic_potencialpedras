import Form_DesovaContainer from "./COMEX-DESOVA_CONTAINER";
import Form_FechamentoMensal from "./ADM-FECHAMENTO_MENSAL";
import Form_RegistroOcorrencia_QuebraChapa from "./COM-RES_OCORRENCIA_QUEBRA_CHAPA";
import Form_ValePedagio from "./ADM-VALE_PEDAGIO";
import Form_AdmissaoColaborador from "./DP-ADMISSAO_COLABORADOR";
import Form_OvacaoContainer from "./COMEX-OVACAO_CONTAINER";
import Form_PedidoDeCompra from "./COM-PEDIDO_DE_COMPRA";
import Form_RelatorioDeVisita from "./COM-RELATORIO-DE-VISITA";
import Form_PrestacaoServicoTerceiro from "./ADM-SERVICO_TERCEIRO";
import Form_OvacaoContainerTerceiros from "./COMEX-OVACAO_CONTAINER_TERCEIROS";
import Form_SaidasBlocosEstoque from "./ADM-SAIDA_BLOCO_ESTOCAGEM";
import Form_ProgramacaoViagem from "./COM-PROGRAMACAO_VIAGEM";
import Form_SolicitacaoCompra from "./COM-SOLICITACAO_COMPRA";

export const forms = [
  {
    id: "desova_container",
    nome: "COMEX - Desova de Container",
    path: "/forms/desova_container",
    component: Form_DesovaContainer,
  },
  {
    id: "fechamento_mensal",
    nome: "ADM - Fechamento Mensal - Fornecedores",
    path: "/forms/fechamento_mensal",
    component: Form_FechamentoMensal,
  },
  {
    id: "quebra_de_chapa",
    nome: "COM - Registro de Ocorrência - Quebra de Chapa",
    path: "/forms/quebra_de_chapa",
    component: Form_RegistroOcorrencia_QuebraChapa,
  },
  {
    id: "vale_pedagio",
    nome: "ADM - Solicitação de Vale Pedágio",
    path: "/forms/vale_pedagio",
    component: Form_ValePedagio,
  },
  {
    id: "admissao_colaborador",
    nome: "DP - Admissão de Colaboradores",
    path: "/forms/admissao_colaborador",
    component: Form_AdmissaoColaborador,
  },
  {
    id: "ovacao_container",
    nome: "COMEX - Ovação de Container",
    path: "/forms/ovacao_container",
    component: Form_OvacaoContainer,
  },
  {
    id: "pedido_compra",
    nome: "COM - Ordem de Compra",
    path: "/forms/ordem_compra",
    component: Form_PedidoDeCompra,
  },
  {
    id: "relatorio-visita",
    nome: "COM - Relatório de Visita",
    path: "/forms/relatorio-visita",
    component: Form_RelatorioDeVisita,
  },
  {
    id: "servico_terceiro",
    nome: "ADM - Prestação de Serviço em Terceiros",
    path: "/forms/servico_terceiro",
    component: Form_PrestacaoServicoTerceiro,
  },
  {
    id: "ovacao_container_terceiro",
    nome: "COMEX - Ovação de Container para Terceiros",
    path: "/forms/ovacao_container_terceiro",
    component: Form_OvacaoContainerTerceiros,
  },
  {
    id: "saida_bloco_estoque",
    nome: "COM - Saída de Bloco em Estocagem",
    path: "/forms/saida_bloco_estoque",
    component: Form_SaidasBlocosEstoque,
  },
  {
    id: "programacao_viagem",
    nome: "COM - Programação de Viagem",
    path: "/forms/programacao_viagem",
    component: Form_ProgramacaoViagem,
  },
  {
    id: "solicitacao_compra",
    nome: "COM - Solicitação de Compras - Insumos/Serviços",
    path: "/forms/solicitacao_compra",
    component: Form_SolicitacaoCompra,
  },
  {
    id: "ex_contrl_manutencao",
    nome: "EX - Controle de Manutenção - Keepfy",
    link: "https://app.keepfy.com/service-orders?tab=overview",
  },

  {
    id: "ex_sistema_eso",
    nome: "EX - Sistema ESO - Controle EPI",
    link: "https://core.sistemaeso.com.br/account/login",
  },
];
