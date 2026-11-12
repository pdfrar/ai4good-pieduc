// Rede da transmissão professor -> aluno (usado por index.html e aluno.html).
//
// A conexão é direta entre os aparelhos (WebRTC). Os servidores STUN só ajudam cada aparelho a descobrir o próprio
// endereço na internet. Quando a rede bloqueia conexão direta (Wi-Fi de universidade, dados móveis de algumas
// operadoras), entra o servidor TURN, que retransmite o texto entre os dois.
//
// Para ligar o TURN do Metered (https://www.metered.ca/stun-turn, plano gratuito):
//   1. Crie a conta e um app TURN.
//   2. Em "TURN Credentials", copie o nome do app (o que vem antes de .metered.live) e a API key.
//   3. Preencha os dois campos abaixo.
// Atenção: este arquivo é público. Qualquer pessoa pode ler a chave e usar a cota do plano. Para um protótipo
// isso é aceitável; num produto, as credenciais devem vir de um servidor próprio.
window.PIEDUC_TURN = {
  meteredApp: "",   // ex.: "pieduc" (de pieduc.metered.live)
  meteredKey: "",   // API key do Metered
};

(() => {
  const STUN = [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:stun.cloudflare.com:3478" }];
  let cache = null;

  // Devolve a lista de servidores ICE: sempre os STUN; mais os TURN do Metered, se configurados e se responderem
  // em até 5 s. Se o Metered falhar, segue só com STUN (funciona na maioria das redes).
  window.pieducIce = function () {
    if (cache) return cache;
    const cfg = window.PIEDUC_TURN || {};
    if (!cfg.meteredApp || !cfg.meteredKey) return (cache = Promise.resolve(STUN));
    const url = `https://${encodeURIComponent(cfg.meteredApp)}.metered.live/api/v1/turn/credentials?apiKey=${encodeURIComponent(cfg.meteredKey)}`;
    const ctrl = typeof AbortController === "function" ? new AbortController() : null;
    const timer = setTimeout(() => ctrl && ctrl.abort(), 5000);
    cache = fetch(url, ctrl ? { signal: ctrl.signal } : {})
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))))
      .then((list) => (Array.isArray(list) && list.length ? STUN.concat(list) : STUN))
      .catch(() => { cache = null; return STUN; }) // tenta de novo na próxima conexão
      .finally(() => clearTimeout(timer));
    return cache;
  };
  window.pieducHasTurn = () => !!(window.PIEDUC_TURN && window.PIEDUC_TURN.meteredApp && window.PIEDUC_TURN.meteredKey);
})();
