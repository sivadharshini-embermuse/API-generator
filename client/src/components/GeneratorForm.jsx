import React, { useState } from 'react'
import {getTemplate} from '../utils/templates'

export default function GeneratorForm({onGenerate}){
  const [category, setCategory] = useState('general')
  const [apiName, setApiName] = useState('MyAPI')
  const [resources, setResources] = useState(getTemplate('general'))
  
  function addResource() {
    setResources((prev) => [
      ...prev,
      { name: `Resource${prev.length + 1}`, fields: [{ name: 'id', type: 'uuid' }] }
    ])
  }

  function handleCategoryChange(e) {
    const selected = e.target.value
    setCategory(selected)
    setResources(getTemplate(selected))
  }
  function handleGenerate(){
    onGenerate(apiName, resources)
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <label className="block mb-2 text-sm font-medium">API Category</label>
      <select
        value={category}
        onChange={handleCategoryChange}
        className="border p-2 w-full mb-4"
      >
        <option value="general">General</option>
        <option value="clothing">Clothing Store</option>
        <option value="food">Food Delivery</option>
        <option value="ecommerce">E-Commerce</option>
        <option value="banking">Banking</option>
        <option value="health">Health Care</option>
        <option value="travel">Travel</option>
        <option value="education">Education</option>
        <option value="movies">Movies / OTT</option>
        <option value="social">Social Media</option>
      </select>
      
      <label className="block mb-2 text-sm font-medium">API Name</label>
      <input value={apiName} onChange={e=>setApiName(e.target.value)} className="border p-2 w-full mb-4" />

      <div className="space-y-4">
        {resources.map((res, idx) => (
          <div key={idx} className="border border-slate-100 p-3 rounded">
            <div className="flex gap-2 items-center mb-2">
              <input value={res.name} onChange={e=>updateResource(idx, {name: e.target.value})} className="border p-2" />
              <button onClick={()=>{
                const newFields = [...res.fields, { name: `field${res.fields.length+1}`, type: 'string'}]
                updateResource(idx, { fields: newFields })
              }} className="ml-2 text-sm px-2 py-1 bg-slate-100 rounded">Add field</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {(res.fields||[]).map((f,i)=> (
                <div key={i} className="flex gap-2 items-center">
                  <input className="border p-1 w-1/2" value={f.name} onChange={e=>{
                    const newF = res.fields.map((ff,ii)=> ii===i ? {...ff, name: e.target.value} : ff)
                    updateResource(idx, { fields: newF })
                  }} />
                  <select className="border p-1 w-1/2" value={f.type} onChange={e=>{
                    const newF = res.fields.map((ff,ii)=> ii===i ? {...ff, type: e.target.value} : ff)
                    updateResource(idx, { fields: newF })
                  }}>
                    <option value="string">string</option>
                    <option value="name">name</option>
                    <option value="email">email</option>
                    <option value="uuid">uuid</option>
                    <option value="integer">integer</option>
                    <option value="boolean">boolean</option>
                    <option value="date">date</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={addResource} className="px-3 py-2 bg-slate-100 rounded">+ Resource</button>
        <button onClick={handleGenerate} className="px-3 py-2 bg-blue-600 text-white rounded">Generate API</button>
      </div>
    </div>
  )
}
