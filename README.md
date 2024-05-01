# Packiyo Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Local dev environment
Set the following variables in a .env file (like .env.example):
```
NEXT_PUBLIC_BACKEND_URL=https://staging1.internal1.packiyo.com/api/v1
TOKEN_HARDCODE=Mytoken // shared by email
```

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decisions made

### React Ecosystem
Nextjs allows us to render components directly from the server, but also components from the client. This gave me flexibility when choosing which should be server components or client components. It also allows me to make all requests directly from the server.

### UI components
I used the library https://ui.shadcn.com, easy to integrate with nextjs and very light, since is NOT a component library. It's a collection of re-usable components that you can copy and paste into apps. 
It also has strong support from the community, being TOP 1 today(ref: https://risingstars.js.org/2023/en#section-react). And excellent compatibility with tailwind.

### Handle Errors

This is the type for all errors:

src/lib/type.ts

```bash
export interface ServerError {
  detail: string;
  source?: {
    pointer: string;
  };
  status: number;
  title: string;
}
```
All errors that are not validations will be with this structure.

and here src/hooks/useToast.ts we have a hook that is responsible for mapping all the errors and shows a toast for each error

### Run tests
```bash
npm test
```