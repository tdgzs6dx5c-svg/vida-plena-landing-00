# Clínica Vida Plena — Landing Page

Landing page institucional moderna e responsiva para a **Clínica Vida Plena**, com foco em experiência do usuário, clareza de informações e design clean voltado à área da saúde.

## ✨ Visão Geral

Página única que apresenta a clínica, seus serviços, equipe e canal de contato. Construída com design clean, paleta suave (verde, azul claro e branco) e tipografia profissional.

### Seções

1. **Hero** — Título principal, subtítulo, CTA "Agende sua consulta" e imagem de destaque.
2. **Sobre Nós** — Apresentação institucional e indicadores da clínica.
3. **Nossos Serviços** — Atendimento Médico, Exames Laboratoriais e de Imagem, Aconselhamento Nutricional e Procedimentos de Saúde.
4. **Nossa Equipe** — Perfis dos profissionais (Dra. Ana Souza, Dr. Carlos Mendes e Juliana Lima).
5. **Entre em Contato** — Formulário estático (Nome, E-mail, Cidade, Estado).
6. **Rodapé** — Endereço (Brasília/DF), telefone, e-mail e créditos.

## 🛠️ Tecnologias

- **TanStack Start** + **React 19** — framework full-stack com SSR
- **Vite 7** — build tool
- **Tailwind CSS v4** — estilização com design tokens semânticos
- **shadcn/ui** — componentes acessíveis (Button, Card, Input, Select, Label)
- **Lucide React** — ícones

## 🎨 Design System

Tokens definidos em `src/styles.css` usando `oklch`:
- Paleta: verde + azul claro + branco
- Gradientes suaves (`--gradient-primary`, `--gradient-soft`, `--gradient-hero`)
- Sombras elegantes (`--shadow-card`, `--shadow-soft`)

## 🚀 Como rodar localmente

```bash
bun install
bun run dev
```

Acesse `http://localhost:5173`.

## 📦 Estrutura

```
src/
├── routes/
│   ├── __root.tsx       # Layout raiz + SEO
│   └── index.tsx        # Landing page
├── components/ui/       # Componentes shadcn
├── assets/              # Imagens (hero, serviços, equipe)
└── styles.css           # Design tokens
```

## 👩‍💻 Créditos

Criado por **Kamyla Emanuelle Gomes** — 2026
