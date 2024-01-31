# Movies App

## Запуск проекта

### Установка зависимостей

```
yarn install
```

## Скрипты

- `dev` Запуск **Vite dev server**
- `dev:webpack` Запуск **Webpack dev server**
- `build:vite` Сборка проекта с **Vite**
- `build:webpack` Сборка проекта с **Webpack**
- `lint` Запуск ESLint для **ts** и **vue** файлов
- `stylelint` Запуск **Stylelint**
- `prettier` Форматировать код с **prettier**
- `dep-cruiser` Сгенерировать **dependency-graph**
- `test:unit` Запуск **unit** тестов

## Конфигурация проекта

#### **[Webpack](https://webpack.js.org/concepts/)**

- `webpack-dev-server` — Cервер с поддержкой **HMR**.
- `circular-dependency-plugin` — Выявление кольцевых зависимостей между модулями.
- `fork-ts-checker-webpack-plugin` — Проверка типов **TypeScript** в отдельном процессе.

#### **[Vite](https://vitejs.dev/guide/)**

- `vitejs/plugin-vue` — Поддержка **Vue**.
- `rollup-plugin-visualizer` — Визуализация **Rollup bundle**.

### Файлы Конфигурации

- Зависимости: [package.json](https://github.com/Hmfall/vue-movies-app/blob/main/package.json)
- Webpack: [build-webpack](https://github.com/Hmfall/vue-movies-app/tree/main/config/webpack)
- Vite: [vite.config.mts](https://github.com/Hmfall/vue-movies-app/blob/main/config/vite/vite.config.mts)
- Babel: [babel.config.json](https://github.com/Hmfall/vue-movies-app/blob/main/babel.config.json)
- TypeScript: [tsconfig.json](https://github.com/Hmfall/vue-movies-app/blob/main/tsconfig.json)
- ESLint: [.eslintrc.cjs](https://github.com/Hmfall/vue-movies-app/blob/main/.eslintrc.cjs)
- Stylelint: [.stylelintrc.json](https://github.com/Hmfall/vue-movies-app/blob/main/.stylelintrc.json)
- Prettier: [.prettierrc.json](https://github.com/Hmfall/vue-movies-app/blob/main/.prettierrc.json)

## Линтинг

Используется конфигурация **plugin:vue/vue3-recommended** для линтинга **Vue**.

### Плагины

- `eslint-plugin-vue` — Линтинг **Vue** компонентов.
- `@typescript-eslint/eslint-plugin` — Линтинг **TypeScript** кода. Работает с **vue-eslint-parser** для анализа **TypeScript** кода во **Vue** компонентах.
- `eslint-plugin-import` — Линтинг **ES6+ import/export** синтаксиса.
- `eslint-import-resolver-typescript` — Поддержка **TypeScript** для **eslint-plugin-import** плагина.
- `eslint-import-resolver-alias` — Поддержка  **alias** для плагина **eslint-plugin-import**.
- `@feature-sliced/eslint-config` — Линтинг согласно методологии **FSD**.

<br />

[![fsd]( https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&color=F2F2F2&labelColor=262224&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dKxCQAgDETR0w2cws0cys2cwhEUBbsggikCuVekDHwSQFlYo7Q+8KnmtHdFWMdk2cl5wSsbxGSZw8dm8pX9ZHUTMBUgGU2F718AAAAASUVORK5CYII=)](https://feature-sliced.design/)
[![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)
[![typescript]( https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
