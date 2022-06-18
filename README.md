# nextjs

//getstaticprops를 써야할때

// The data required to render the page is available at build time ahead of a user’s request
// The data comes from a headless CMS
// The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
// The data can be publicly cached (not user-specific). This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path.
