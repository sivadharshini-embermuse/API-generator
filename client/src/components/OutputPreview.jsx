import React from 'react'

export default function OutputPreview({result}){
  
  function handleDownload() {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.apiName || 'api'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if(!result) return (
    <div className="text-slate-500">No output yet — generate an API to see the preview.</div>
  )

  return (

    <div className="mt-6 bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold mb-2">Generated API: {result.apiName}</h3>
        <div className="text-sm text-slate-600 mb-2">Base URL: <code className="bg-slate-100 px-2 py-0.5 rounded">{result.baseURL}</code></div>
        <button
          onClick={handleDownload}
          className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          💾 Download JSON
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium">Endpoints</h4>
          <ul className="mt-2 space-y-2">
            {result.endpoints.map((ep, i)=> (
              <li key={i} className="p-2 border rounded bg-slate-50">
                <div className="text-sm font-medium">{ep.name} — <code>{ep.basePath}</code></div>
                <pre className="mt-2 text-xs bg-white p-2 rounded overflow-auto">{JSON.stringify(ep.sample, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium">OpenAPI (minimal)</h4>
          <pre className="mt-2 text-xs bg-white p-2 rounded overflow-auto">{JSON.stringify(result.openapi, null, 2)}</pre>
        </div>
      </div>

    </div>
  )
}
