import express from 'express'
import { faker } from '@faker-js/faker'

const router = express.Router()

router.get('/:api/:resource', (req, res) => {
  const { resource } = req.params
  const fakeData = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    createdAt: faker.date.recent().toISOString()
  }
  res.json({ resource, data: fakeData })
})

export default router
