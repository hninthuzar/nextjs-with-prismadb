This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, run initial setup:

```bash
npx create-next-app@latest

npm i prisma --save-dev

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## More Information

This project used nextjs version 13.4.13, prisma (ORM - Object Relational Mapper) and db for sqlite.
This project works todo list that include insert, update and delete actions.
