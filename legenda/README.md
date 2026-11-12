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
- Avisa na tela quando nada está sendo captado, porque quem é surdo não percebe sozinho que a legenda parou.

## Navegadores

| Navegador | Funciona? |
|---|---|
| Chrome (computador e Android) | Sim, recomendado |
| Edge (computador) | Sim |
| Safari (Mac e iPhone) | Em parte: pode parar sozinho |
| Brave, Opera, Vivaldi | Não: têm o recurso, mas sem acesso ao serviço de fala (erro "sem conexão") |
| Firefox | Não tem reconhecimento de fala |

A página precisa estar em https (o GitHub Pages já é) e pedir permissão do microfone. No Android, a legenda roda em modo contínuo, para o Chrome não tocar um bipe a cada frase (a turma ouviria). O Chrome pode reenviar frases já finalizadas nesse modo; o código filtra as repetidas.

## Aviso de "nada captado"

Para quem é surdo, o silêncio do professor e um microfone que não capta nada parecem iguais. Por isso, se a legenda passar 15 s sem receber texto, aparece um aviso grande acima dela ("Nada captado há 20 s...") e a borda fica tracejada. Se o reconhecimento estiver reconectando, o aviso diz que a fala daquele momento pode não aparecer.

## Privacidade

- O áudio vai para o serviço de reconhecimento de fala do próprio navegador (Google, no Chrome; Microsoft, no Edge) apenas para virar texto.
- O texto fica salvo **só no aparelho** de quem usa (armazenamento local do navegador). O PIEDUC não tem servidor e não guarda nem envia a transcrição para lugar nenhum.
- "Apagar" remove o histórico do aparelho.
