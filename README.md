<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />
  
  # NANO
  
  ### TECNOLOGIA SOB MEDIDA
</div>

---

# Apex Advocacia | Banca de Elite

## Visão Geral

O **Apex Advocacia** é um sistema institucional moderno e de alto desempenho composto por uma Landing Page escalável e responsiva de alta conversão. O software foi meticulosamente projetado com base em pilares de UX (User Experience) e otimizações mobile-first para atuar como um mecanismo imediato de geração e qualificação de oportunidades comerciais no setor jurídico.

A plataforma resolve o gargalo comum da perda de leads de dados móveis lentos graças à sua arquitetura estática leve, apresentando seções fluidas para agendamento ágil de consultas jurídicas, detalhamento de competências por nichos de mercado (holding, empresarial, sucessões), e um sistema dinâmico adaptável a qualquer preferência visual do usuário final, incluindo Modo Escuro inteligente e persistente.

---

## Funcionalidades Principais

> **Hero Section & Captura Estratégica**: Formulário de pré-agendamento de alta conversão integrado com sistemas inteligentes de validação de dados em tempo real (Zod, React Hook Form) para capturar leads de forma síncrona.

> **Áreas Jurídicas Direcionadas**: Sistema modular que conecta o usuário diretamente ao canal de atendimento ideal para seu perfil de caso, pré-carregando mensagens contextualizadas.

> **Modo Escuro com Configuração Híbrida**: Alteração de visual sistêmico instantâneo acionado via detecção automática das preferências globais do sistema operacional do cliente ou controle manual persistido no dispositivo (*localStorage*).

> **Otimização Extrema de Bandwidth**: Carregamento instantâneo por meio de recursos críticos em inline, ícones vetorizados estruturados e substituição de mapas comerciais pesados por uma renderização unificada com *OpenStreetMap* em conformidade com as diretivas mais rigorosas de indexação web.

---

## Stack Técnica

A arquitetura do projeto une ferramentas de vanguarda no ecossistema do desenvolvimento moderno em JavaScript/TypeScript a fim de garantir robustez, tipagem estrita e portabilidade máxima.

| Categoria | Tecnologia |
|---|---|
| **Estrutura Core** | React 19 / TypeScript 5.8 / Vite 6 (Portabilidade ESM) |
| **Styling Engine** | Tailwind CSS v4 (Compilação ultra veloz por plugins do compilador Vite) |
| **Icons Library** | Lucide-React (Vetorizados adaptativos) |
| **Animations** | Motion (Microinterações suaves de transição no ciclo de renderização) |
| **Mapa / Geolocalização**| OpenStreetMap (Livre de licenças pagas comerciais e de alto desempenho de iFrames) |
| **CI / CD Pipeline** | GitHub Actions (Com mecanismos de linting estático) |
| **Hospedagem / CD** | GitHub Pages (Compilação para ambiente estático otimizado) |

---

## Arquitetura do Projeto

O código-fonte segue as melhores convenções de desenvolvimento limpo utilizando o padrão modular descentralizado:

*   **src/components/**: Invólucro de componentes de apresentação isolados sob responsabilidade única (Header, Hero, Specialties, Stats, Differentiators, Testimonials, Footer, ConsultationModal).
*   **src/types.ts**: Definições estritas de contratos de tipos e assinaturas de objetos do domínio do sistema (Lead, Specialty, Location, Testimonial), extinguindo o uso do operador degradante `any`.
*   **src/data.ts**: Desacoplamento completo dos conteúdos institucionais e metadados de configuração estática, facilitando mudanças rápidas nos termos de copy e tradução sem modificar as árvores de UI.
*   **Local State Persistence & LocalStorage**: Engine híbrida de armazenamento no client-side para armazenar temporariamente novos registros e gerenciar configurações visuais de acessibilidade e tema com reatividade rápida.

---

## Estrutura de Pastas

```bash
/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Fluxo automatizado de teste e deploy GitHub Pages
├── assets/
├── src/
│   ├── components/         # Componentes isolados e independentes
│   │   ├── ConsultationModal.tsx
│   │   ├── Differentiators.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Specialties.tsx
│   │   └── Testimonials.tsx
│   ├── App.tsx             # Arquivo principal do Ciclo de Estado Global
│   ├── data.ts             # Conteúdos, dados estáticos e localizações
│   ├── index.css           # Variáveis do tema unificado e inicialização Tailwind
│   ├── main.tsx            # Ponto de entrada do renderizador DOM
│   └── types.ts            # Tipagens globais do sistema
├── index.html              # Template base indexado
├── package.json            # Configuração e indexação de dependências npm
├── tsconfig.json           # Configuração de validação do compilador do TypeScript
└── vite.config.ts          # Arquivo de otimização de bundles e bundles-aliases
```

---

## Instalação e Execução

### Pré-requisitos
*   **Node.js**: Versão 18 ou superior.
*   **NPM / Yarn / PNPM**: Gerenciador de pacotes moderno.

### Passos para Inicialização

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/apex-advocacia.git
    cd apex-advocacia
    ```

2.  **Instale as dependências requisitadas:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento local:**
    ```bash
    npm run dev
    ```
    O servidor será exposto em `http://localhost:3000` (ou sua respectiva porta parametrizada).

4.  **Execute o linting estático para validação de erros de tipagem:**
    ```bash
    npm run lint
    ```

5.  **Gere o build de para produção:**
    ```bash
    npm run build
    ```
    Os ativos estáticos minificados e compilados serão gerados na pasta de destino `./dist`.

---

## Scripts Disponíveis

Documentação de todos os comandos configurados no manifesto de depedências:

| Script | Comando Real | Descrição |
|---|---|---|
| **dev** | `tsx server.ts` \| `vite` | Inicializa o servidor de desenvolvimento local |
| **build** | `vite build` | Compila o código fonte principal e minifica recursos CSS/JS |
| **lint** | `tsc --noEmit` | Valida violações de tipagem ou bugs lógicos usando TypeScript Compiler |

---

## Deploy Otimizado

Este repositório conta com um fluxo de deploy integrado com **GitHub Actions** configurado em `.github/workflows/deploy.yml`. 

A pipeline executa as etapas de qualidade automaticamente a cada alteração aprovada no branch principal (`main`):

```yaml
# Fluxo da esteira de deploy:
1. Trigger por Push na branch main ->
2. Configuração do ambiente Node.js estável ->
3. Instalação limpa dos pacotes necessários (`npm install`) ->
4. Execução de linting estático rigoroso para barrar bugs em homologação (`npm run lint`) ->
5. Geração de bundles minificados (`npm run build`) ->
6. Upload e publicação automatizada do artefato gerado no GitHub Pages.
```

---

## Considerações Técnicas de Excelência

*   **Padrões CSS Dinâmicos**: A cor esmeralda principal e variantes de contraste são parametrizadas sob a diretiva de `@theme` estendida do Tailwind CSS v4, reduzindo o tempo de renderização e permitindo a refatoração do layout com simplicidade sem alterar classes em lotes.
*   **Acessibilidade Híbrida**: O suporte ao Modo Escuro nativo impede o estresse visual do usuário ao acessar o site em ambientes noturnos, de acordo com as preferências setadas no hardware cliente.
*   **Desempenho Móvel**: Sem dependência de SDKs de terceiros lentos ou chamadas dinâmicas a endpoints externos na carga inicial das seções.

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br
