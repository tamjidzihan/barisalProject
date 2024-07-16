const app = require('./utils/app'); // Backend App (server)
const mongo = require('./utils/mongo'); // MongoDB (database)
const { PORT } = require('./constants');
const generateModelRouter = require('./routers/generateModelRouter');

const models = {
    allservice: require('./models/allServiceModel'),

    university: require('./models/universityModel'),//
    college: require('./models/collegeModel'),//
    ambulanceservice: require('./models/ambulanceServiceModel'),//
    hospital: require('./models/hospitalModel'),//
    company: require('./models/companyModel'),//
    market: require('./models/marketModel'),//
    school: require('./models/schoolModel'),//
    touringzone: require('./models/touringZoneModel'),//
    governmentservice: require('./models/governmentServiceModel'),//
    currieerservices: require('./models/currieerServiceModel'),//
    bloodbank: require('./models/bloodBankModel'),//
    highlightedFood: require('./models/highlightedFoodModel'),//
    barservice: require('./models/barServiceModel'),//
    brandhotel: require('./models/brandhotelModel'),//
    launchesservice: require('./models/launchesServiceModel'),
    busservice: require('./models/busServiceModel'),
    airservice: require('./models/airserviceModel')//
};

async function bootstrap() {
    await mongo.connect();

    app.get('/', (req, res) => res.status(200).json({ message: 'E-Service Of Barishal' }));

    // General model routes
    Object.keys(models).forEach(modelName => {
        app.use(`/${modelName}`, generateModelRouter(models[modelName]));
    });

    // All service specific route
    // app.use('/allservice/:model', (req, res, next) => {
    //     const modelName = req.params.model;
    //     const Model = models[modelName];
    //     if (Model) {
    //         generateModelRouter(Model)(req, res, next);
    //     } else {
    //         res.status(404).json({ error: 'Model not found' });
    //     }
    // });

    app.listen(PORT, () => {
        console.log(`✅ Server is listening on port: ${PORT}`);
    });
}

bootstrap();
