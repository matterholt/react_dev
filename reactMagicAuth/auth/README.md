# Project

playing around with authorization for web app

## working through process

1. AUTHORIZATION

   - client side

     1. submit request to login with magic link. which will send an email for user.
     2. User clicked on link which will be a successful authentication
     3. a decentralized identifier is return and used as a token
     4. If user does not supply the correct input -> try catch the error

   - backend side

     1. nextjs api login, and using the magic link tokens to save as cookie and allow to move to app
     2. set up magic on the backend
     3. we get the user detail by token, and in return we have the issuer, public address, user email.
     4. need to protect user data so will use IRON to encrypt the data, which will be sealed up in the lib folder
     5. save to Token Cookie , extracted to the lib folder
     6. create a cookie

   - back to the client side
     1. if return status is 200 then redirect to the dash or profile
     2. if not should handle it some how the user knows that there was an error
        ////////////////////////////////////////////////

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
