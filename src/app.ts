import express, { Application, Request, Response } from 'express'

const app: Application = express()

const userRoute = express.Router()

userRoute.get('/all-users', (req: Request, res: Response) =>{
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Touts and Travels',
    data: [
      {
        name: "bappy",
        email: "bappy@g.com"
      }
    ]
  })
})

app.use('/api/v1/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Touts and Travels',
  })
})

// app.get('/api/v1/users', (req: Request, res: Response) => {
//   const user = [
//     {
//       id: 1,
//       name: 'bismi',
//       email: 'bismi@gmail.com'
//     },
//     {
//       id: 2,
//       name: 'akib',
//       email: 'akib@gmail.com'
//     }
//   ]

//   res.status(200).json({
//     status: 'success',
//     message: 'User fetched successfully',
//     data: user
//   })
// })


export default app