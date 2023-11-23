### Turborepo-Sveltekit-Typia example

#### Setup
```sh
pnpm add turbo --global
pnpm install
```

pnpm workspace with typia & TS imports : 
```sh
npx ts-node packages/typiaLib/run.ts
```

#### Sveltekit with TS imports
Dev
```sh
npx turbo run dev --filter=SvelteKitTS
```
