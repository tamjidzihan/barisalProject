const app = require("../utils/app");
const mongo = require("../utils/mongo");
const generateModelRouter = require("../routers/generateModelRouter");
const {
    authorizeBearerToken,
    authorizeAdmin,
} = require("../middlewares/jsonwebtoken");
const authRoutes = require("../routers/auth");

const models = {
    allservice: require("../models/allServiceModel"),
    university: require("../models/universityModel"),
    college: require("../models/collegeModel"),
    ambulanceservice: require("../models/ambulanceServiceModel"),
    hospital: require("../models/hospitalModel"),
    company: require("../models/companyModel"),
    market: require("../models/marketModel"),
    school: require("../models/schoolModel"),
    touringzone: require("../models/touringZoneModel"),
    governmentservice: require("../models/governmentServiceModel"),
    currieerservices: require("../models/currieerServiceModel"),
    bloodbank: require("../models/bloodBankModel"),
    highlightedFood: require("../models/highlightedFoodModel"),
    barservice: require("../models/barServiceModel"),
    brandhotel: require("../models/brandhotelModel"),
    launchesservice: require("../models/launchesServiceModel"),
    busservice: require("../models/busServiceModel"),
    airservice: require("../models/airserviceModel"),
    realestate: require("../models/realEstateModel"),
};

// Connect to MongoDB (with connection caching for serverless)
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    await mongo.connect();
    cachedDb = true;
    return cachedDb;
}

// Root route
app.get("/", (req, res) => {
    res.status(200).json({ message: "E-Service Of Barishal" });
});

// Public routes
Object.keys(models).forEach((modelName) => {
    app.use(`/${modelName}`, generateModelRouter(models[modelName]));
});

// Protected routes (admin only)
Object.keys(models).forEach((modelName) => {
    app.use(
        `/${modelName}`,
        authorizeBearerToken,
        authorizeAdmin,
        generateModelRouter(models[modelName])
    );
});

app.use("/auth", authRoutes);

// Export the Express app for Vercel
module.exports = async (req, res) => {
    await connectToDatabase();
    return app(req, res);
};