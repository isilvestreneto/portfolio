# Portfólio — Ivanildo Silvestre

Portfólio pessoal construído em Angular 20 (standalone components), com SSR/PWA scaffolding, tema claro/escuro persistente e transições de rota via View Transitions API nativa do navegador.

## Stack

- **Angular 20** — standalone components, lazy loading de rotas, `provideRouter` com `withViewTransitions()`.
- **@lucide/angular** — ícones como componentes standalone (`provideLucideIcons`).
- **SCSS** — variáveis CSS (`--color-*`, `--font-*`) para o tema claro/escuro, alternado via atributo `data-theme` no `<html>`.
- **Fontes self-hosted** — Inter, Exo 2 e Orbitron servidas como `.woff2` de `public/fonts`, sem dependência de CDN ou de pacotes `@fontsource`.
- **PWA** — `@angular/service-worker` + `manifest.webmanifest`, habilitado no build de produção (`ngsw-config.json`).

## Estrutura

```
src/app/
├── app.component.ts          # shell da aplicação (toggle de tema, router-outlet)
├── app.config.ts             # providers da aplicação (router, hidratação, ícones)
├── app.routes.ts             # rotas lazy-loaded
├── components/                # componentes reutilizáveis (header, navbar, footer, project-card, skills-marquee, testimonials)
├── pages/                     # páginas roteadas (home, sobre-mim, project-details, project-page-wrapper)
└── services/
    └── theme.service.ts       # persiste o tema (light/dark) no localStorage
```

## Rodando localmente

Pré-requisitos: Node.js e npm.

```bash
npm install
npm start        # ng serve --o — abre http://localhost:4200
```

O servidor de desenvolvimento recarrega automaticamente a cada alteração nos arquivos-fonte.

## Build

```bash
npm run build
```

Gera os artefatos de produção em `dist/portfolio-vercel`, com otimizações, hashing de assets e o service worker habilitado.

Para acompanhar mudanças durante o desenvolvimento sem o dev server:

```bash
npm run watch
```

## Testes

```bash
npm test
```

Executa os testes unitários com Karma/Jasmine.

## Deploy

O projeto está configurado para deploy na Vercel (nome do pacote `portfolio-vercel`).

## Notas de manutenção

Alguns pontos identificados na última revisão, para acompanhar:

- Os pacotes `@lucide/angular`, `@fontsource/*` (removido em favor de fontes self-hosted) e `@angular/service-worker` já causaram erros de build por estarem referenciados no código sem constar em `package.json`/`node_modules`. Ao adicionar uma nova lib, confirme que ela foi salva em `package.json` (`npm install <pkg> --save`).
- Há scaffolding de SSR (`@angular/ssr`, `app.config.server.ts`, `app.routes.server.ts`) mas falta o entry point `src/main.server.ts` e a opção `server` no `angular.json` — ou seja, o SSR está incompleto/não é usado no build atual. Vale decidir entre completar a configuração ou remover os arquivos órfãos.
- `provideLucideIcons(...)` em `app.config.ts` precisa dos ícones passados como argumento (`Cpu, FileText, Lightbulb, LightbulbOff, TrendingUp, Wrench`); alguma ferramenta de lint/format do editor tem removido esses argumentos ao salvar, o que silenciosamente para de renderizar os ícones (sem erro de build). Vale checar a configuração de "organize imports" ou auto-fix do ESLint/editor.

## Recursos

- [Documentação do Angular](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
