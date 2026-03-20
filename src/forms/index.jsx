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
import Form_EnvioSerrada from "./PRO-ENVIO_SERRADA";
import Form_ProgramacaoEnvelopamento from "./ADM-PROGRAMACAO_ENVELOPAMENTO";
import Form_ChegadaBloco from "./SER-CHEGA_DE_BLOCO";
import Form_InsCarregamento from "./EXP-INSPECAO_CARREGAMENTO";
import Form_MarcacaoPlaca from "./CAR-MARCACAO_DE_PLACA";
import Form_controleTratamento from "./PRO-CONTROLE-TRATAMENTO";

export const forms = [
  {
    id: "desova_container",
    nome: "COMEX - Desova de Container",
    group: "COMEX",
    path: "/forms/desova_container",
    component: Form_DesovaContainer,
    formId: "251896016329665",
  },
  {
    id: "fechamento_mensal",
    nome: "ADM - Fechamento Mensal - Fornecedores",
    group: "ADM",
    path: "/forms/fechamento_mensal",
    component: Form_FechamentoMensal,
    formId: "251277012092045",
  },
  {
    id: "quebra_de_chapa",
    nome: "COM - Registro de Ocorrência - Quebra de Chapa",
    group: "COM",
    path: "/forms/quebra_de_chapa",
    component: Form_RegistroOcorrencia_QuebraChapa,
    formId: "251325388191661",
  },
  {
    id: "vale_pedagio",
    nome: "ADM - Solicitação de Vale Pedágio",
    group: "ADM",
    path: "/forms/vale_pedagio",
    component: Form_ValePedagio,
    formId: "251276025255655",
  },
  {
    id: "admissao_colaborador",
    nome: "DP - Admissão de Colaboradores",
    group: "ADM",
    path: "/forms/admissao_colaborador",
    component: Form_AdmissaoColaborador,
    formId: "250974986786078",
  },
  {
    id: "ovacao_container",
    nome: "COMEX - Ovação de Container",
    group: "COMEX",
    path: "/forms/ovacao_container",
    component: Form_OvacaoContainer,
    formId: "252736537239667",
  },
  {
    id: "pedido_compra",
    nome: "COM - Ordem de Compra",
    group: "COM",
    path: "/forms/ordem_compra",
    component: Form_PedidoDeCompra,
    formId: "252545735143053",
  },
  {
    id: "relatorio-visita",
    nome: "PRO - Visita de Fornecedor",
    group: "PRO",
    path: "/forms/relatorio-visita",
    component: Form_RelatorioDeVisita,
    formId: "252546013817051",
  },
  {
    id: "servico_terceiro",
    nome: "ADM - Prestação de Serviço em Terceiros",
    group: "ADM",
    path: "/forms/servico_terceiro",
    component: Form_PrestacaoServicoTerceiro,
    formId: "251276700669058",
  },
  {
    id: "ovacao_container_terceiro",
    nome: "COMEX - Ovação de Container para Terceiros",
    group: "COMEX",
    path: "/forms/ovacao_container_terceiro",
    component: Form_OvacaoContainerTerceiros,
    formId: "251143393786665",
  },
  {
    id: "saida_bloco_estoque",
    nome: "COM - Saída de Bloco em Estocagem",
    group: "COM",
    path: "/forms/saida_bloco_estoque",
    component: Form_SaidasBlocosEstoque,
    formId: "251744047494664",
  },
  {
    id: "programacao_viagem",
    nome: "EXP - Programação de Viagem",
    group: "EXP",
    path: "/forms/programacao_viagem",
    component: Form_ProgramacaoViagem,
    formId: "252535770897067",
  },
  {
    id: "solicitacao_compra",
    nome: "COM - Solicitação de Compras - Insumos/Serviços",
    group: "COM",
    path: "/forms/solicitacao_compra",
    component: Form_SolicitacaoCompra,
    formId: "252535487962065",
  },
  {
    id: "envio_serrada",
    nome: "PRO - Envio Ficha de Serrada",
    group: "PRO",
    path: "/forms/envio_serrada",
    component: Form_EnvioSerrada,
    formId: "252584894062062",
  },
  {
    id: "prog_envelopamento",
    nome: "ADM - Programação de Envelopamento",
    group: "PRO",
    path: "/forms/prog_envelopamento",
    component: Form_ProgramacaoEnvelopamento,
    formId: "252585930191663",
  },
  {
    id: "chegada_bloco",
    nome: "SER - Entrada de Bloco | Chapa",
    group: "PRO",
    path: "/forms/chegada_bloco",
    component: Form_ChegadaBloco,
    formId: "252613599317666",
  },
  {
    id: "inspecao_carregamento",
    nome: "EXP - Inspeção de Carregamento",
    group: "CAR",
    path: "/forms/chegada_bloco",
    component: Form_InsCarregamento,
    formId: "252646482304053",
  },
  {
    id: "marcacao_placa",
    nome: "CAR - Marcação de Placa",
    path: "/forms/marcacao-placa",
    group: "CAR",
    component: Form_MarcacaoPlaca,
    formId: "252925364785065",
  },
  {
    id: "controle_trata",
    nome: "PRO - Controle de Tratamento",
    path: "/forms/controle-tratamento",
    group: "PRO",
    component: Form_controleTratamento,
    formId: "260783357661667",
  },
  {
    id: "ex_contrl_manutencao",
    nome: "EX - Controle de Manutenção - Keepfy",
    group: "LINK",
    link: "https://app.keepfy.com/service-orders?tab=overview",
  },
  {
    id: "ex_potencial-web",
    nome: "APP - PotencialWeb",
    group: "LINK",
    link: "https://app.potencialweb.integraclass.com.br/",
  },

  // {
  //   id: "ex_sistema_eso",
  //   nome: "EX - Sistema ESO - Controle EPI",
  //   link: "https://core.sistemaeso.com.br/account/login",
  // },
];


