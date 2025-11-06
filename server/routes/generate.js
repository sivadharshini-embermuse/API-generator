import express from 'express'
import { buildFakeApi } from '../utils/generator.js'

const router = express.Router()

router.post('/', (req, res) => {
  const { apiName, resources } = req.body
  if (!apiName || !resources) {
    return res.status(400).json({ error: 'Missing apiName or resources' })
  }

  const generated = buildFakeApi(apiName, resources)
  res.json(generated)
})

export default router
