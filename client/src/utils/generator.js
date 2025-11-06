export async function generateFakeApi(apiName, resources) {
  const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  const res = await fetch(`${backendURL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiName, resources }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error('Generate API failed: ' + text);
  }

  return await res.json();
}
