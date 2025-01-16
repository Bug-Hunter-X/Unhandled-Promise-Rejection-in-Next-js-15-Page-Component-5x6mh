## Unhandled Promise Rejection in Next.js 15 Page Component

This repository demonstrates a subtle bug in Next.js 15 where an unhandled promise rejection can occur if an async function is called within a page component that is not declared as `async`. The error is not always consistently caught during development, potentially leading to unexpected behavior in production.

**Bug:**
The `about.js` file attempts to fetch data using an async function. However, it does not declare the component itself as `async`. This results in an unhandled promise rejection, even though the application might not crash entirely. The error message might not be immediately clear.

**Solution:**
Declare the page component as `async`. This ensures that the promise is correctly handled within the component's lifecycle.