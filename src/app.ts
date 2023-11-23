import express, { Application, Request, Response } from 'express'
import { userRouter } from './routes/user.route'
import cors from 'cors';

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRouter.router)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Touts and Travels',
  })
}) 

export default app