import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import generateRouter from './routes/generate.js'
import mockRouter from './routes/mock.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/generate', generateRouter)
app.use('/mock', mockRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 APIForge backend running on port ${PORT}`))



