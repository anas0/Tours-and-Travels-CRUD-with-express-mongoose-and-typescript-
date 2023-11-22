import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Touts and Travels',
  })
})

app.get('/api/v1/users', (req: Request, res: Response) => {
  const user = [
    {
      id: 1,
      name: 'bismi',
      email: 'bismi@gmail.com'
    },
    {
      id: 2,
      name: 'akib',
      email: 'akib@gmail.com'
    }
  ]

  res.status(200).json({
    status: 'success',
    message: 'User fetched successfully',
    data: user
  })
})


export default app