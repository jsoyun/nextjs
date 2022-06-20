# nextjs

//getstaticprops를 써야할때

// The data required to render the page is available at build time ahead of a user’s request
// The data comes from a headless CMS
// The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
// The data can be publicly cached (not user-specific). This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path.
//https://nextjs.org/docs/basic-features/data-fetching/get-static-props

//220621
useSession()
The NextAuth.js client library makes it easy to interact with sessions from React applications.
https://next-auth.js.org/getting-started/client
https://dantechblog.gatsbyjs.io/posts/next-auth/
The useSession() React Hook in the NextAuth.js client is the easiest way to check if someone is signed in.

useSession() returns an object containing two values: data and status:

data: This can be three values: Session / undefined / null.
when the session hasn't been fetched yet, data will undefined
in case it failed to retrieve the session, data will be null
in case of success, data will be Session.
status: enum mapping to three possible session states: "loading" | "authenticated" | "unauthenticated"

TODO 1) 구글 로그인 해보기!!!!
//https://next-auth.js.org/configuration/providers/oauth#how-to
