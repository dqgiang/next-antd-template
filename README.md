# NextJS with Ant Design

## What's included

- Nextjs v10+ with CSS module built-in, [.env built-int](https://nextjs.org/docs/basic-features/environment-variables)
- Ant Design v4.15+, customizable with less, using config helper module (https://www.npmjs.com/package/next-plugin-antd-less)
- Typescript
- ESLint with Semistandard coding style and Typescript support
- Prettier

## Other setup

- Disable telemetry by default by setting `NEXT_TELEMETRY_DEBUG=1` (https://nextjs.org/telemetry)
- Preconfigure `paths` for module alias. Must be done in both `tsconfig.json` and `next.config.js`

```ts
// DON'T
import { Card } from '../components/Card';

// DO
import { Card } from '@components/Card';

- Example `Card` component to demonstrate how to organize view, css and file naming properly. Using `index.ts` to export component so that we don't need to specify long import statement. Also useful when grouping similar components

```ts
// DON'T
import Card from '@components/Card/card.component.tsx';

// DO
import { Card } from '@components/Card';
```

- Included npm script to run linter

```bash
npm run lint
# OR
npm run lint:fix
```

## Local development

1. Copy `.env.example` to `.env` and edit variables accordingly

```bash
cp .env.local.example .env.local
```

2. Install node modules and start development server

```bash
npm install
npm run dev
```

3. To start server in production mode, run:

```bash
npm run build
npm run start
```

## Deployment

This template does not include custom server.
Vercel.com is the best way to deploy it with almost no configuration.
