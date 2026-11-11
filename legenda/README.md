# PIEDUC · Legenda ao vivo

Transforma a fala do professor em legenda grande na tela, em tempo real, e guarda o histórico da aula com horário para o aluno reler depois.

- **Usar:** https://pdfrar.github.io/ai4good-pieduc/legenda/
- **Demonstração sem microfone:** https://pdfrar.github.io/ai4good-pieduc/legenda/?demo

## Como funciona

- Usa a [Web Speech API](https://developer.mozilla.org/docs/Web/API/SpeechRecognition) do navegador, em português (pt-BR). É um arquivo só (`index.html`), sem servidor e sem dependências.
- **Tela única:** a legenda grande mostra as últimas linhas faladas; abaixo fica o histórico da aula, que rola e mantém a posição se o aluno voltar para reler.
- **Leitura:** letra ajustável (A− / A+), fundo escuro ou claro em alto contraste, tela cheia para projetar e tela sempre acesa enquanto a legenda roda.
- **Depois da aula:** "Copiar" ou "Baixar .txt" exporta a transcrição com horários, que é a entrada da cadeia de IA (texto adaptado por perfil e tutor socrático).
- Religa sozinha quando o navegador encerra o reconhecimento (silêncio longo, troca de rede, tela apagada).

## Navegadores

| Navegador | Funciona? |
|---|---|
| Chrome (computador e Android) | Sim, recomendado |
| Edge (computador) | Sim |
| Safari (Mac e iPhone) | Em parte: pode parar sozinho |
| Brave, Opera, Vivaldi | Não: têm o recurso, mas sem acesso ao serviço de fala (erro "sem conexão") |
| Firefox | Não tem reconhecimento de fala |

A página precisa estar em https (o GitHub Pages já é) e pedir permissão do microfone. No Android, o Chrome toca um bipe a cada frase, porque lá a legenda é religada a cada frase para evitar texto repetido.

## Privacidade

- O áudio vai para o serviço de reconhecimento de fala do próprio navegador (Google, no Chrome; Microsoft, no Edge) apenas para virar texto.
- O texto fica salvo **só no aparelho** de quem usa (armazenamento local do navegador). O PIEDUC não tem servidor e não guarda nem envia a transcrição para lugar nenhum.
- "Apagar" remove o histórico do aparelho.
