# Validação — Vão

## Regras e ciclo de vida

- Dez testes Node aprovados. Todos os dez tabuleiros são distintos, válidos, inicialmente não resolvidos e têm soluções mínimas verificadas por BFS: 4/5/6/7/8/9/10/13/14/15 manobras. Cada passo mantém limites, ausência de sobreposição, eixo e comprimento das peças. Vitória bloqueia novas ações.
- Testes adicionais no mesmo conjunto cobrem colisão ao longo de todo o trajeto (sem atravessar obstáculos), imutabilidade, movimentos inválidos, validação de tabuleiro, limite/determinismo do solver, estados vizinhos solucionáveis nos três primeiros pátios, save corrompido e recordes solo/guiados separados.
- Harness local no navegador: 21 verificações aprovadas, incluindo teclado, desfazer, pausa por blur, bloqueio de input pausado, cancelamento de worker antigo, dica por worker real, campanha completa pela interface, replay e persistência. Usa controles/eventos DOM normais, sem escrever diretamente no estado do jogo. Blur disparado como Event, sem alegar troca física de aba. Harness fora do export.
- Arraste desktop de uma casa testado na origem de desenvolvimento. No export, arraste após resize em viewport 390 × 844 moveu o vagão uma casa; P abriu pausa, Escape retomou mantendo o estado. Primeiro pátio concluído no export móvel em quatro manobras, com transições normais. Documento útil 375 px, scrollWidth 375 px, sem overflow horizontal; tabuleiro 290 px e peça vertical ~44 px. Override temporário restaurado.
- Dica no build real retornou manobra legal e marcou rota guiada. Ajustados distância inicial de novo pátio e seletor de distância conforme a dica, para evitar carregar distância anterior sem perceber. Resize cancela um arraste em curso.
- Som opcional e movimento reduzido persistidos no harness. Áudio procedural limitado a quatro vozes; sem análise auditiva humana. Sem loop permanente ou serviço remoto.

## Segurança e publicação

`npm audit` sem vulnerabilidades informadas em 02/11/2026. Typecheck e build aprovados. Export contém apenas HTML, favicon, licença e chunks JS/CSS/worker; sem source maps, testes, fontes do projeto, ambientes ou configuração local. CSP limita recursos à própria origem; nenhuma API de consumo, conta, backend, cartão, faturamento ou trial.

GitHub Pages público disponível no GitHub Free, conforme https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages. Nenhum cartão, faturamento ou trial ativado.

## Demo pública — 02/11/2026

- Implementação `09bf3f139b005f1e6df93ee6a15c9b47c0f1f95f`; workflow `41530566794` aprovou testes, auditoria, build e deploy.
- Campanha inteira concluída na URL pública, sem injetar estado ou editar save: 4/5/6/7/8/9/10/13/14/15 manobras, 91 ao todo. Primeiro pátio com dica e transições normais; restantes sem dica, usando Menos movimento. Dica foi calculada pelo worker publicado. Estratégias derivadas do modelo, executadas por botões normais; não alegar solução humana ou prova de diversão.
- Replay, manual reabrível, P/Escape, input bloqueado por obstáculo e histórico de dez pátios após reload conferidos. Preferência de movimento persistiu e som foi ligado/desligado por gesto; tentativa atual reiniciou como documentado. Evidências `public-first.png`, `public-campaign.png`, `public-gameplay.png`.
- Seis arquivos públicos idênticos byte a byte ao export local, incluindo worker e licenças; cerca de 54,8 kB no total. Bundle principal ~12 kB gzip. Sem medição de FPS ou benchmark físico.
- Gitleaks 8.30.1 com configuração externa confiável, sem achados no staged, histórico completo, export e clone remoto novo. Sem supressões locais. Secret scanning, push protection e alertas/atualizações de dependências gratuitos habilitados.
- API do GitHub confirmou somente `gustapaz` como contribuidor; autor e committer `Gustavo Paz <96732649+gustapaz@users.noreply.github.com>`, sem coautoria adicional. Screenshots contêm somente o jogo e dados de teste.
- Console contém mensagens da extensão do navegador e aviso de desenvolvimento apenas no servidor dev; não foram identificados erros do código do jogo durante a campanha pública.

## Limites

Sem telefone físico, Safari, gamepad, teste de toque físico ou auditoria integral de leitor de tela. Arraste em viewport móvel usa pointer de desktop; não é prova de hardware touch. Busca de dicas limitada a 70.000 estados, sem alegar solução de toda posição arbitrária dentro desse orçamento. Estratégias calculadas e executadas por controles normais não comprovam diversão/dificuldade humana. Sem garantia offline, disponibilidade permanente, FPS universal ou ausência absoluta de vulnerabilidades. Saves locais são modificáveis; tentativa atual não persiste.
