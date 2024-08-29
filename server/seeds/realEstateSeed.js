const mongoose = require("mongoose");
const { MONGO_URI } = require("../constants");

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const realEstateDetailSchema = new mongoose.Schema({
  type: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  contact: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  Location: {
    type: String,
    required: false,
  },
});

const realEstateServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  result: [realEstateDetailSchema],
});

const RealEstate = mongoose.model("RealEstate", realEstateServiceSchema);

// Data to be inserted
const realEstateData = {
  name: "Real Estate Services in Barisal",
  type: "Real Estate",
  slug: "realestateservices",
  image: "", // Add URL for image if available
  description: "List of Real Estate Services in Barisal",
  result: [
    {
      name: "CIVIL DEVELOPMENT",
      image: "https://i.ibb.co/g6J7yJk/civil-development.webp",
      address: "House-1456, Rajumiar Goli, Battala, Barisal, Bangladesh, 8200",
      email: "info@civildevelopment.org",
      website: "https://civildevelopment.org/",
      phone: "+880 1925-396631",
    },
    {
      name: "Rahmania Properties",
      image: "https://i.ibb.co/jbVnz0Y/Rahmania-properties.webp",
      address: "ভূঁইয়া ম্যানশন-১৪৫৬, রাজু মিয়াঁর গলি, Major M A Jalil Rd, বরিশাল। 8200",
      email: "info@rahmaniaproperties.com",
      website: "https://www.rahmaniaproperties.com/",
      phone: "01635-220370",
    },
    {
      name: "Hillview Housing Ltd",
      image: "https://i.ibb.co/rtyNyz4/Hillview-Housing-Ltd.webp",
      address: "Islam Tower, Holding 1039 College Row, Barishal 8200",
      email: "info@hillviewbd.com",
      website: "https://hillviewbd.com/",
      phone: "+880 1719449091",
    },
    {
      name: "ENSURE LANDMARK LTD",
      image: "https://i.ibb.co/rtyNyz4/Hillview-Housing-Ltd.webp",
      address: "P938+V47 Kobi Jibonando Dash Lane, Bogra Rd, Barishal",
      email: "info@ensuregroup.com.bd",
      website: "https://www.ensuregroup.com.bd/",
      phone: "+88-09613-868686",
    },
    {
      name: "ADC Holdings Limited",
      address: "2nd Floor, Hasina Mahol, H#566, Bangla Bazar Rd, Barishal 8200",
      email: "info@adc-bd.com",
      website: "www.adcgroup-bd.com",
      phone: "01727-012346",
    }
  ]
};

RealEstate.create(realEstateData)
  .then(() => console.log('Real estate service data inserted'))
  .catch(err => console.log(err));
