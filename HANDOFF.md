# Handoff — PIEDUC (AI4Good BC27)

Estado em 11/11/2026, à noite. Inscrição fecha **12/11/2026, 23h59** (meta interna: enviar até 20h).

## Decisões tomadas

- **Foco:** só estudantes surdos no piloto, na UEPB. TEA, TDAH e deficiência intelectual ficam como visão de futuro.
- **Princípio:** a IA apoia o intérprete de Libras e **nunca o substitui**. A legenda é plano B quando falta intérprete.
- **VLibras:** só como último recurso, fora da frase-resumo.
- **Três componentes:** legenda ao vivo; kit de preparação do intérprete (gerado pelo WhatsApp do professor); glossário aberto de sinais técnicos de Computação, validado por surdos e intérpretes.
- **Metas da aceleração:** legenda mais confiável; kit do intérprete; glossário com ~50 sinais de Computação; piloto numa disciplina da UEPB medindo compreensão e participação.
- **Linguagem:** "estudante surdo", não "deficiente auditivo".
- **Privacidade:** a história do colega surdo nunca leva detalhes que o identifiquem.
- **Orientador:** o coordenador de acessibilidade da UEPB (surdo, usuário de Libras) será convidado. O nome só entra no formulário com **aceite por escrito**.

## O que está pronto

| Item | Onde |
|---|---|
| Legenda ao vivo, publicada | `legenda/` · https://pdfrar.github.io/ai4good-pieduc/legenda/ (demo: `?demo`) |
| Aviso de "nada captado" (15 s sem texto) | `legenda/index.html` |
| Android em modo contínuo, sem bipe a cada frase (testado no Android) | `legenda/index.html` |
| Cor base roxa (#6b3fd4 no claro, #b99cff no escuro, contraste > 6:1) | `legenda/index.html` |
| Rascunho do formulário reescrito, dentro dos limites de caracteres | `Rascunho Formulario AI4Good - PIEDUC.md` |
| Artigo científico do projeto (para o coordenador) | `PIEDUC - Artigo.pdf` |
| Telas: prints da legenda e esboços do kit e do glossário | `telas/` |

Também existem, fora do repositório (documentos privados no claude.ai): o artigo editável, que gerou o PDF, e o roteiro do teste com o colega e a intérprete.

## Pendências

### Antes do envio (12/11)

1. **Cedo:** conversar com o coordenador. Convite para orientar, opinião sincera, participação no teste e, se ele quiser, uma frase para citar. Pedir o aceite por mensagem.
2. **Teste da legenda** com o colega surdo e a intérprete (seguir o roteiro). Anotar 2 ou 3 achados e as palavras que a legenda errou.
3. **Vídeo** de 30 a 60 s da legenda, **com legenda embutida** (e janela de Libras, se alguém topar). Não é obrigatório.
4. **Formulário:** resolver os marcadores do rascunho:
   - `[SE ACEITAR]` / `[SEM ACEITE]`: manter um, apagar o outro.
   - `[SE FIZER]`: manter só se o teste aconteceu; senão, apagar.
   - `[SE HOUVER]`: frase do coordenador.
   - `[PREENCHER]`: curso e habilidades da Mariana, LinkedIns, link do PDF de 2023 no Drive.
   - Figma: só entra se mostrar o novo foco.
5. **Enviar até 20h** e conferir o e-mail de confirmação.

### Depois

- Preencher curso e instituição da Mariana no artigo e regenerar o PDF.
- Entrevistas dos pré-selecionados: 20 a 22/11/2026.

## Números usados (INEP)

- Educação básica 2025: 18.301 matrículas com surdez (82% em classes comuns); 41.462 com deficiência auditiva; 5.433 tradutores-intérpretes de Libras em sala.
- Graduação 2024: 2.377 matrículas com surdez; 10.258 com deficiência auditiva.
- Fontes: Sinopse Estatística da Educação Básica 2025 (tab. 1.58, 1.65, 2.76) e da Educação Superior 2024 (tab. 5.8).
- **Cuidado:** o INEP conta matrículas, não pessoas, e não publica quantos alunos surdos estão sem intérprete. Não afirmar isso.

## Notas técnicas

- A legenda é um arquivo só (`legenda/index.html`), sem servidor, com a Web Speech API. Funciona no Chrome e no Edge; não funciona em Firefox, Brave, Opera e Vivaldi.
- Os prints em `telas/` foram feitos com Chromium headless sobre uma cópia da página em modo `?demo`, com um script que clica em "Começar legenda". Para o print do aviso, a cópia usa `STALE_MS = 3000` e pausas longas entre frases.
- O GitHub Pages publica a branch `main` sozinho a cada push (leva menos de 1 minuto).
