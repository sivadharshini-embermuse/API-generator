import { faker } from '@faker-js/faker'

export function buildFakeApi(apiName, resources) {
  const baseURL = `/mock/${apiName.toLowerCase()}`

  const endpoints = resources.map(res => {
    const sample = {}
    res.fields.forEach(f => {
      sample[f.name] = sampleValue(f.type)
    })
    return {
      name: res.name,
      path: `${baseURL}/${res.name.toLowerCase()}`,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      sample
    }
  })

  const openapi = {
    openapi: '3.0.0',
    info: { title: apiName, version: '1.0.0' },
    paths: {}
  }

  endpoints.forEach(ep => {
    openapi.paths[ep.path] = {
      get: { responses: { '200': { description: 'OK' } } },
      post: { responses: { '201': { description: 'Created' } } }
    }
  })

  return { apiName, baseURL, endpoints, openapi }
}

function sampleValue(type) {
  switch (type) {
    case 'uuid': return faker.string.uuid();
    case 'email': return faker.internet.email();
    case 'name': return faker.person.fullName();
    case 'integer': return faker.number.int();
    case 'boolean': return faker.datatype.boolean();
    case 'date': return faker.date.recent().toISOString();
    default: return faker.lorem.word();
  }
}
