import React, { useState } from 'react'
import GeneratorForm from '../components/GeneratorForm'
import OutputPreview from '../components/OutputPreview'
import { generateFakeApi } from '../utils/generator'

export default function GenerateAPI(){
  const [result, setResult] = useState(null)

  async function handleGenerate(apiName, resources){
    const r = await generateFakeApi(apiName, resources)
    setResult(r)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <GeneratorForm onGenerate={handleGenerate} />
      </div>
      <div className="lg:col-span-2">
        <OutputPreview result={result} />
      </div>
    </div>
  )
}
