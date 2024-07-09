const app = require('./utils/app') // Backend App (server)
const mongo = require('./utils/mongo') // MongoDB (database)
const { PORT } = require('./constants')
const universityRouter = require('./routers/universityRouter')
const collegeRouter = require('./routers/collegeRouter')
// const authRoutes = require('./routes/auth')


async function bootstrap() {
    await mongo.connect()

    // app.use('/auth', authRoutes)
    app.get('/', (req, res) => res.status(200).json({ message: 'Barisal Project' }))
    app.use('/university', universityRouter)
    app.use('/college', collegeRouter)


    app.listen(PORT, () => {
        console.log(`✅ Server is listening on port: ${PORT}`)
    })
}

bootstrap()
