```javascript
// pages/about.js

export default async function About() {
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