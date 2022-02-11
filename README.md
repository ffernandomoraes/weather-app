# Weather APP
A simple application that shows the weather of the current location.

### Demo

Clique [here](https://weather-app-kappa-ecru.vercel.app).

![image](https://user-images.githubusercontent.com/22228470/153615423-17ff7db6-058f-4ff7-87b7-b3b2da907ad9.png)

### Technologies
- React
- Typescript
- @emotion/styled (for styles)

### Linter
- Eslint
- Prettier

### Architecture
This architecture is not linked to any state management libraries.

```
├─ .vscode/
│   └─ settings.json
├─ docker/
│   ├─ prod/
│   └─ dev/                      
├─ docs/                         # Documentação
├─ public/
├─ scripts/
├─ src/
│   ├─ assets/                  # Imagens, fontes, temas
│   ├─ components/              # Componentes compartilhados
│   │   └─ Example/
│   │       └─ index.tsx
│   ├─ declarations/            # Declarações e alterações de tipagem
│   │   └─ extra.d.ts
│   ├─ helpers/                 # Valores e funções padrões do app
│   │   ├─ consts.ts
│   │   ├─ enums.ts
│   │   └─ functions.ts
│   ├─ hooks/                   # Hooks personalizados
│   │   └─ useCustomHook.ts
│   ├─ interfaces/
│   │   └─ User/
│   │       └─ index.ts
│   ├─ pages/
│   │   ├─ private/             # Páginas privadas
│   │   │   ├─ Dashboard/
│   │   │   │   └ index.tsx
│   │   │   └─ index.tsx        # Arquivo de rotas privadas e lógicas de segurança
│   │   ├─ public/              # Páginas publicas
│   │   │   └─ Auth/
│   │   │       └─ index.tsx
│   │   └─ routes.tsx           # Arquivo de rotas públicas
│   ├─ services/
│   │   ├─ User/
│   │   │   └─ index.ts
│   │   └─ Service.ts           # Arquivo base que possuem helpers para outras services
│   ├─ tests/
│   ├─ App.tsx
│   ├─ index.tsx
│   └─ settings.ts              # Arquivo manipulador de variaveis de ambiente
├─ .editorconfig
├─ .env.development
├─ .env.production
├─ .eslintignore
├─ .eslintrc
├─ .gitignore
├─ .prettierrc.js
├─ package.json
├─ README.md
└─ tsconfig.json
```

### Run

Install the dependencies.
```sh
yarn
```

Run script.
```sh
yarn start
```

see the result at: http://localhost:3000
