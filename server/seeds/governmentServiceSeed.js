const mongoose = require('mongoose');

// Replace with your MongoDB URI
const { MONGO_URI } = require('../constants');
const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define the schema
const governmentServiceSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    services: { type: String, required: false },
    website: { type: String, required: false }
});

// Create a model based on the schema
const GovernmentService = mongoose.model('GovernmentService', governmentServiceSchema);

// Data to be inserted
const governmentServices = [
    {
        type: 'Government service',
        name: 'Barishal City Corporation',
        address: 'Fazlul Haque Avenue, Barishal 8200, Bangladesh',
        services: 'Municipal administration, public service oversight, infrastructure development',
        website: 'Barishal City Corporation'
    },
    {
        type: 'Government service',
        name: 'Office of the Deputy Commissioner, Barishal',
        address: 'Circuit House Road, Barishal 8200, Bangladesh',
        services: 'District administration, law and order, disaster management, public service coordination',
        website: 'Barishal District'
    },
    {
        type: 'Government service',
        name: 'Barishal Divisional Commissioner’s Office',
        address: 'Divisional Commissioner’s Office, Barishal',
        services: 'Regional administration, policy implementation, coordination of government activities',
        website: 'Barishal Division'
    },
    {
        type: 'Government service',
        name: 'Department of Youth Development, Barishal',
        address: 'Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Youth training, employment support',
        website: 'Youth Development'
    },
    {
        type: 'Government service',
        name: 'Department of Women Affairs, Barishal',
        address: 'Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Women empowerment programs, legal support for women',
        website: 'Women Affairs'
    },
    {
        type: 'Government service',
        name: 'Bangladesh Rural Development Board (BRDB), Barishal',
        address: 'Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Rural development projects, community support',
        website: 'BRDB'
    },
    {
        type: 'Government service',
        name: 'Fire Service and Civil Defense, Barishal',
        address: 'Kalibari Road, Barishal 8200, Bangladesh',
        services: 'Firefighting, rescue operations, disaster response',
        website: 'Fire Service'
    },
    {
        type: 'Government service',
        name: 'Barishal Police Commissioner’s Office',
        address: 'Police Lines, Barishal 8200, Bangladesh',
        services: 'Law enforcement, public safety',
        website: 'Barishal Police'
    },
    {
        type: 'Government service',
        name: 'Department of Agriculture Extension, Barishal',
        address: 'Agriculture Extension Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Agricultural support, farmer training, crop management',
        website: 'Agriculture Extension'
    },
    {
        type: 'Government service',
        name: 'Department of Social Services, Barishal',
        address: 'Social Services Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Social welfare programs, support for the elderly, disability services',
        website: 'Social Services'
    },
    {
        type: 'Government service',
        name: 'Barishal Regional Passport Office',
        address: 'Regional Passport Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Issuance and renewal of passports, travel document support',
        website: 'Passport Office'
    },
    {
        type: 'Government service',
        name: 'Department of Primary Education, Barishal',
        address: 'Primary Education Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Primary education management, school administration',
        website: 'Primary Education'
    },
    {
        type: 'Government service',
        name: 'District Election Office, Barishal',
        address: 'Election Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Electoral roll management, election oversight',
        website: 'Election Office'
    },
    {
        type: 'Government service',
        name: 'Office of the District Registrar, Barishal',
        address: 'District Registrar Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Property registration, legal document verification',
        website: 'District Registrar'
    },
    {
        type: 'Government service',
        name: 'Barishal Customs, Excise, and VAT Division',
        address: 'Customs and VAT Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Customs duties, tax collection, VAT management',
        website: 'Customs and VAT'
    },
    {
        type: 'Government service',
        name: 'District Statistics Office, Barishal',
        address: 'Statistics Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Data collection, statistical analysis, census management',
        website: 'Statistics Office'
    },
    {
        type: 'Government service',
        name: 'Barishal Divisional Sports Office',
        address: 'Sports Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Sports management, event organization, athlete support',
        website: 'Sports Office'
    },
    {
        type: 'Government service',
        name: 'Directorate of National Consumer Rights Protection, Barishal',
        address: 'Consumer Rights Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Consumer rights protection, complaint resolution',
        website: 'Consumer Rights'
    },
    {
        type: 'Government service',
        name: 'Barishal Metropolitan Police',
        address: 'Metropolitan Police Office, Band Road, Barishal 8200, Bangladesh',
        services: 'Law enforcement, public safety, crime prevention',
        website: 'Barishal Metropolitan Police'
    },
    {
        type: 'Government service',
        name: 'Barishal Education Board',
        address: 'Education Board Office, Kawnia, Barishal 8200, Bangladesh',
        services: 'Secondary and higher secondary education administration, examination management',
        website: 'Barishal Education Board'
    },
    {
        type: 'Government service',
        name: 'Divisional Forest Office, Barishal',
        address: 'Forest Department, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Forest management, conservation, wildlife protection',
        website: 'Forest Department'
    },
    {
        type: 'Government service',
        name: 'Department of Public Health Engineering, Barishal',
        address: 'Public Health Engineering Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Water supply, sanitation, public health infrastructure',
        website: 'Public Health Engineering'
    },
    {
        type: 'Government service',
        name: 'Department of Fisheries, Barishal',
        address: 'Fisheries Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Fisheries management, aquaculture development',
        website: 'Fisheries Department'
    },
    {
        type: 'Government service',
        name: 'Barishal District Public Library',
        address: 'Public Library, Amtala, Barishal 8200, Bangladesh',
        services: 'Public library services, educational resources',
        website: 'Public Library'
    },
    {
        type: 'Government service',
        name: 'Department of Livestock Services, Barishal',
        address: 'Livestock Services Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Veterinary services, livestock management, animal health',
        website: 'Livestock Services'
    },
    {
        type: 'Government service',
        name: 'Barishal Divisional Sports Council',
        address: 'Sports Council Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Sports promotion, athlete training, event management',
        website: 'Sports Council'
    },
    {
        type: 'Government service',
        name: 'Barishal District Jail',
        address: 'Jail Road, Barishal 8200, Bangladesh',
        services: 'Correctional facility, inmate rehabilitation',
        website: 'Barishal District Jail'
    },
    {
        type: 'Government service',
        name: 'Department of Environment, Barishal',
        address: 'Environment Office, Circuit House Road, Barishal 8200, Bangladesh',
        services: 'Environmental protection, pollution control, ecological conservation',
        website: 'Environment Department'
    },
    // Add more government services as needed
];

// Insert data into the database
GovernmentService.insertMany(governmentServices)
    .then(() => {
        console.log('Government services inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
