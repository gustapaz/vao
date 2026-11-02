# Vão

**Abra caminho.** Dez pátios de cargas deslizantes, uma saída e nenhuma pressa.

[Jogar gratuitamente](https://gustapaz.github.io/vao/)

Um puzzle de planejamento espacial: leve o vagão amarelo à borda direita da terceira linha, reorganizando cargas que só se movem no próprio eixo. Dez configurações próprias com solução mínima verificada, de 4 a 15 manobras. Visual de planta industrial em cobalto, retículas e materiais translúcidos, feito inteiramente em CSS/DOM.

## Jogar

- Arraste uma carga no sentido do trilho; o movimento para no primeiro obstáculo.
- Alternativa: selecione a carga, escolha a quantidade de casas e use os botões de direção.
- Teclado: Tab/Enter seleciona; setas no tabuleiro deslocam uma casa no eixo. Shift + seta percorre o espaço livre. **P** pausa; **Escape** retoma ou fecha o manual.
- Uma manobra pode percorrer várias casas. Desfazer também conta uma manobra. Reiniciar começa uma tentativa nova.
- Dica mostra a próxima manobra de uma rota mínima a partir da posição atual e marca a tentativa como guiada. A busca é local, limitada a 70.000 estados e pode não encontrar uma resposta dentro desse orçamento. Reinício/pausa encerram a busca.
- Pátios são liberados em sequência; os abertos podem ser revisitados. O décimo encerra a campanha e oferece replay. Sem cronômetro, vidas ou derrota artificial: bloqueios podem ser desfeitos.

Melhores resultados **solo e guiados são separados**, salvos somente neste navegador. Preferências de som/movimento também persistem; a tentativa atual reinicia ao recarregar. Armazenamento indisponível não impede jogar. Histórico local pode ser modificado pelo usuário; não é ranking confiável online.

## Desenvolver

**Lit 3.3.3 + TypeScript 7.0.2 + Vite 8.3.5.** Modelo puro independente, componentes Lit em DOM, solver em Web Worker para não bloquear a interface. Sem Canvas, WebGL, engine física ou loop contínuo. Efeitos sonoros opcionais com Web Audio; máximo quatro vozes curtas simultâneas.

Node 24:

```sh
npm ci
npm test
npm run build
npm run dev
```

Desenvolvimento: `http://127.0.0.1:4193/`. Preview do export: `npm run preview`, porta 4194. Harness local: `/tests/browser.html` no servidor de desenvolvimento; usa apenas o save desta origem de teste. Não é publicado. Build exporta somente `dist/`, com caminhos relativos compatíveis com `/vao/`.

## Custos, privacidade e licença

Hospedagem estática GitHub Pages de repositório público, disponível no GitHub Free ([documentação](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)). Sem cartão, faturamento, trial, backend, API de consumo, conta, compras ou analytics adicionados. GitHub Pages mantém seus próprios logs de acesso. Sem promessa de disponibilidade gratuita permanente ou cache offline.

Código e arte próprios sob MIT. Avisos BSD dos componentes Lit incluídos em `third-party.txt`. Sem sprites, imagens, fontes ou áudio externos; a referência é a família genérica de puzzles de blocos deslizantes, com configurações e apresentação próprias. Consulte [assets](docs/assets.md), [design](docs/game-design.md) e [validação](docs/validation.md).
