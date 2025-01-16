```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the function is not async
  const data = await fetchData();

  return (
    <div>
      <h1>About Page</h1>
      <p>Some data from the API call: {data}</p>
    </div>
  );
}

async function fetchData() {
  const res = await fetch('/api/data');
  return res.json();
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  res.status(200).json({ text: 'Data from API' });
}
```