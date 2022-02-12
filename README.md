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
├─ docs/                        # Documentation
├─ public/
├─ scripts/
├─ src/
│   ├─ assets/                  # Images, fonts, themes
│   ├─ components/              # Componentes compartilhados
│   │   └─ Example/
│   │       └─ index.tsx
│   ├─ declarations/            # Shared components
│   │   └─ extra.d.ts
│   ├─ helpers/                 # Default values and app functions
│   │   ├─ consts.ts
│   │   ├─ enums.ts
│   │   └─ functions.ts
│   ├─ hooks/                   # custom Hooks
│   │   └─ useCustomHook.ts
│   ├─ interfaces/
│   │   └─ User/
│   │       └─ index.ts
│   ├─ pages/
│   │   ├─ private/             # Private pages
│   │   │   ├─ Dashboard/
│   │   │   │   └ index.tsx
│   │   │   └─ index.tsx        # Private route file and security logic
│   │   ├─ public/              # Public pages
│   │   │   └─ Auth/
│   │   │       └─ index.tsx
│   │   └─ routes.tsx           # Public routes file
│   ├─ services/
│   │   ├─ User/
│   │   │   └─ index.ts
│   │   └─ Service.ts           # Base file that have helpers for other services
│   ├─ tests/
│   ├─ App.tsx
│   ├─ index.tsx
│   └─ settings.ts              # Environment variable handler file
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

### Test
```sh
yarn test
```
