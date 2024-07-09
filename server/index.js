const app = require('./utils/app') // Backend App (server)
const mongo = require('./utils/mongo') // MongoDB (database)
const { PORT } = require('./constants')
const university = require('./models/universityModel')
const college = require('./models/collegeModel')
const ambulanceService = require('./models/ambulanceServiceModel')
const hospital = require('./models/hospitalModel')
const company = require('./models/companyModel')
const market = require('./models/marketModel')
const school = require('./models/schoolModel')
const touringZone = require('./models/touringZoneModel')
const governmentservice = require('./models/governmentServiceModel')
const currieerService = require('./models/currieerServiceModel')
const bloodbank = require('./models/bloodBankModel')
const highlightedfood = require('./models/highlightedFoodModel')
const barservice = require('./models/barServiceModel')
const brandHotel = require('./models/brandhotelModel')
const launchesService = require('./models/launchesServiceModel')
const busService = require('./models/busServiceModel')
const airService = require('./models/airserviceModel')


const generateModelRouter = require('./routers/generateModelRouter');


async function bootstrap() {
    await mongo.connect()

    // app.use('/auth', authRoutes)
    app.get('/', (req, res) => res.status(200).json({ message: 'Barisal Project' }))

    app.use('/university', generateModelRouter(university))
    app.use('/college', generateModelRouter(college))
    app.use('/school', generateModelRouter(school))
    app.use('/hospital', generateModelRouter(hospital))
    app.use('/market', generateModelRouter(market))
    app.use('/ambulanceservice', generateModelRouter(ambulanceService))
    app.use('/touringzone', generateModelRouter(touringZone));
    app.use('/company', generateModelRouter(company))
    app.use('/governmentservice', generateModelRouter(governmentservice))
    app.use('/currieerservice', generateModelRouter(currieerService))
    app.use('/bloodbank', generateModelRouter(bloodbank))
    app.use('/highlightedfood', generateModelRouter(highlightedfood))
    app.use('/barservice', generateModelRouter(barservice))
    app.use('/brandhotel', generateModelRouter(brandHotel))
    app.use('/launchesservice', generateModelRouter(launchesService))
    app.use('/busservice', generateModelRouter(busService))
    app.use('/airservice', generateModelRouter(airService))



    app.listen(PORT, () => {
        console.log(`✅ Server is listening on port: ${PORT}`)
    })
}

bootstrap()
