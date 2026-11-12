# Handoff — PIEDUC (AI4Good BC27)

Estado em 12/11/2026, início da tarde. Inscrição fecha **12/11/2026, 23h59** (meta interna: enviar até 20h). Teste com o aluno surdo marcado para hoje (aula de Banco de Dados II).

## Decisões tomadas

- **Foco:** só estudantes surdos no piloto, na UEPB. TEA, TDAH e deficiência intelectual ficam como visão de futuro.
- **Princípio:** a IA apoia o intérprete de Libras e **nunca o substitui**. A legenda é plano B quando falta intérprete.
- **VLibras:** só como último recurso, fora da frase-resumo.
- **Três componentes:** legenda ao vivo; kit de preparação do intérprete (gerado pelo WhatsApp do professor); glossário aberto de sinais técnicos de Computação, validado por surdos e intérpretes.
- **Metas da aceleração:** legenda mais confiável; kit do intérprete; glossário com ~50 sinais de Computação; piloto numa disciplina da UEPB medindo compreensão e participação.
- **Linguagem:** "estudante surdo", não "deficiente auditivo".
- **Privacidade:** a história do colega surdo nunca leva detalhes que o identifiquem.
- **Orientador:** o coordenador de acessibilidade da UEPB (surdo, usuário de Libras) será convidado. O nome só entra no formulário com **aceite por escrito**.
- **Transmissão:** hoje o professor usa notebook (ou celular) com a tela do professor; o aluno recebe no celular. Depois, tornar o lado do professor mais acessível.

## O que está pronto

| Item | Onde |
|---|---|
| Tela do professor (legenda + transmissão + termos da aula) | `legenda/index.html` · https://pdfrar.github.io/ai4good-pieduc/legenda/ (demo: `?demo`) |
| Tela do aluno (recebe no celular) | `legenda/aluno.html` · https://pdfrar.github.io/ai4good-pieduc/legenda/aluno.html |
| Transmissão por QR code/código da sala, conexão direta (WebRTC via PeerJS) | `legenda/index.html`, `legenda/aluno.html` |
| Avisos no celular do aluno, com vibração: conexão caiu, legenda pausada, 15 s sem captar | `legenda/aluno.html` |
| Termos da aula: lista editável e correções "errado = certo", com lista inicial de Banco de Dados | `legenda/index.html` (painel "Termos da aula") |
| Servidor TURN (retransmissão) pronto para ligar, **ainda sem chave** | `legenda/rede.js` |
| Aviso de "nada captado" (15 s sem texto) na tela do professor | `legenda/index.html` |
| Android em modo contínuo, sem bipe a cada frase (testado no Android) | `legenda/index.html` |
| Visual compartilhado, cor base roxa (#6b3fd4 no claro, #b99cff no escuro, contraste > 6:1) | `legenda/estilo.css` |
| Rascunho do formulário reescrito, dentro dos limites de caracteres | `Rascunho Formulario AI4Good - PIEDUC.md` |
| Artigo científico do projeto (para o coordenador), sem pendências | `PIEDUC - Artigo.pdf` |
| Telas: prints da legenda e esboços do kit e do glossário | `telas/` |

Também existem, fora do repositório: o artigo editável e o roteiro do teste (documentos privados no claude.ai) e a mensagem para o coordenador (`mensagem-coordenador.txt`, não versionada de propósito).

## Pendências

### Hoje, antes do envio

1. **Coordenador:** mandar a mensagem com o PDF do artigo. Pedir o aceite por escrito.
2. **Teste da legenda** com o colega surdo e a intérprete (seguir o roteiro):
   - Antes, testar a transmissão na rede da sala com dois aparelhos de vocês.
   - Ajustar os termos da aula; anotar as palavras que a legenda errar e adicionar como `errado = certo`.
   - Anotar 2 ou 3 achados.
3. **Vídeo** de 30 a 60 s da legenda, **com legenda embutida** (e janela de Libras, se alguém topar). Não é obrigatório.
4. **Formulário:** resolver os marcadores do rascunho:
   - `[SE ACEITAR]` / `[SEM ACEITE]`: manter um, apagar o outro.
   - `[SE FIZER]`: manter só se o teste aconteceu; senão, apagar.
   - `[SE HOUVER]`: frase do coordenador.
   - `[PREENCHER]`: habilidades da Mariana, LinkedIns, link do PDF de 2023 no Drive.
   - Figma: só entra se mostrar o novo foco.
   - Se o teste aconteceu, vale citar a transmissão para o celular do aluno no "Já temos".
5. **Enviar até 20h** e conferir o e-mail de confirmação.
6. **Depois do teste:** atualizar a Tabela 2 do artigo ("Teste com estudante surdo e intérprete": Planejado → Realizado) e regenerar o PDF.

### Ligar o servidor TURN

Necessário só se a conexão direta falhar nas redes de uso (Wi-Fi da universidade, dados móveis).

1. Criar conta gratuita no Metered: https://www.metered.ca/stun-turn (20 GB/mês no plano gratuito).
2. Criar um app TURN e copiar o nome do app (o que vem antes de `.metered.live`) e a API key.
3. Preencher `meteredApp` e `meteredKey` em `legenda/rede.js`, fazer commit e push.
4. **Atenção:** o repositório é público; a chave fica visível e qualquer um pode usar a cota. Aceitável no protótipo; num produto, as credenciais devem vir de um servidor próprio.

Enquanto não houver chave: deixar os dois aparelhos na mesma rede ou usar o roteador do celular do professor.

### Depois

- Entrevistas dos pré-selecionados: 20 a 22/11/2026.
- Tornar o lado do professor mais acessível (hoje é uma página no notebook ou celular).
- Refazer os prints em `telas/` e a Figura 1 do artigo com o histórico cheio (o print atual tem só 1 trecho).

## Números usados (INEP)

- Educação básica 2025: 18.301 matrículas com surdez (82% em classes comuns); 41.462 com deficiência auditiva; 5.433 tradutores-intérpretes de Libras em sala.
- Graduação 2024: 2.377 matrículas com surdez; 10.258 com deficiência auditiva.
- Fontes: Sinopse Estatística da Educação Básica 2025 (tab. 1.58, 1.65, 2.76) e da Educação Superior 2024 (tab. 5.8).
- **Cuidado:** o INEP conta matrículas, não pessoas, e não publica quantos alunos surdos estão sem intérprete. Não afirmar isso.

## Notas técnicas

- **Reconhecimento de fala:** Web Speech API, em pt-BR. Só funciona no **Google Chrome** e no **Edge**. Não funciona em Brave, Opera, Vivaldi, Chromium nem Firefox. O notebook do Pedro tem o Google Chrome instalado (12/11).
- **Tela do professor escondida:** com a aba em segundo plano, a legenda pode parar. Deixar a legenda numa janela própria; no celular, a tela precisa ficar ligada com a página aberta.
- **Transmissão:** PeerJS 1.5.4 (servidor público só para apresentar os aparelhos) e STUN do Google e da Cloudflare. O texto vai direto entre os aparelhos. Mensagens: `snap` (histórico inteiro ao conectar), `final`, `interim`, `clear` e `hb` (sinal a cada 2 s com o estado do professor, usando duração em vez de horário, porque os relógios dos aparelhos podem diferir). Sem mensagem por 8 s, o aluno considera que a conexão caiu.
- **Código da sala:** fica salvo no aparelho do professor (`pieduc-sala`). Ao recarregar, a transmissão volta com o mesmo código.
- **Termos da aula:** cada linha vira uma regra de palavra inteira, sem diferenciar maiúsculas (`\p{L}` para acentos); padrões mais longos primeiro. Os termos também vão como `SpeechRecognitionPhrase` quando o Chrome aceita; se o serviço recusar (`phrases-not-supported`), segue sem.
- **Erro já cometido duas vezes:** `display` no CSS sobrepõe o atributo `hidden`. Agora `estilo.css` tem `[hidden] { display: none !important; }`.
- **Testes:** feitos com Chromium headless controlado por um script (DevTools Protocol), numa página com duas janelas (professor em `?demo&transmitir` e aluno). Testados: conexão, acúmulo do histórico, professor recarregando a página e professor sumindo. Não testados: celular com celular, aba do professor em segundo plano, TURN com chave de verdade.
- **Prints em `telas/`:** Chromium headless sobre uma cópia da página em `?demo`, com um script que clica em "Começar legenda". Para o print do aviso, a cópia usa `STALE_MS = 3000` e pausas longas entre frases.
- O GitHub Pages publica a branch `main` sozinho a cada push (menos de 1 minuto).
