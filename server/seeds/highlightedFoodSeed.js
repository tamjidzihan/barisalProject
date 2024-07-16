const mongoose = require('mongoose');

// Replace with your MongoDB URI
const { MONGO_URI } = require('../constants');
const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



const highlightedFoodSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        description: {
            type: Number,
            required: false
        }
    }
)



const modelName = 'HighlightedFood'
const HighlightedFoodservices = mongoose.model(modelName, highlightedFoodSchema)

// Data to be inserted (excluding the `id` field)
const highlightedFoodservices = [
    {
        name: "Panta Ilish",
        description: "Panta Ilish is a traditional dish made with fermented rice and Hilsa fish, often enjoyed with green chili, onion, and mustard paste.Cultural Significance: This dish is particularly popular during the Bengali New Year (Pohela Boishakh).",
        type: "traditional Bengali dish"
    },
    {
        name: "Shutki Bhorta",
        description: "A spicy mashed preparation made from dried fish (shutki), mixed with mustard oil, green chilies, onions, and garlic. ***Importance: Shutki Bhorta is a local delicacy loved for its strong flavors and aroma.",
        type: "traditional Bengali dish"
    },
    {
        name: "Bhapa Pitha",
        description: "A type of steamed rice cake made with rice flour, coconut, and jaggery, often enjoyed during winter Cultural  ***Importance: This is a common treat during the winter season and is enjoyed with a variety of fillings.",
        type: "traditional Bengali dish"
    },
    {
        name: "Chingri Malai Curry",
        description: "A creamy prawn curry made with coconut milk, spices, and shrimp. ***Popularity: This dish is a favorite at both family dinners and festive occasions.",
        type: "traditional Bengali dish"
    },
    {
        name: "Bhorta (Mashed Delicacies)",
        description: "Various types of mashed items like Begun Bhorta (eggplant), Aloo Bhorta (potato), and Daal Bhorta (lentils) mixed with mustard oil, chilies, and onions.Special Note: Bhorta is an essential part of daily meals in Barishal.",
        type: "traditional Bengali dish"
    },
    {
        name: "Kachchi Biryani",
        description: "A layered rice dish made with marinated raw meat (usually mutton), basmati rice, potatoes, and a blend of spices.***Culinary Highlight: Kachchi Biryani from Barishal is known for its unique taste and is a staple at weddings and large gatherings.",
        type: "traditional Bengali dish"
    },
    {
        name: "Chitol Maacher Muitha",
        description: "Fish balls made from Chitol fish, cooked in a spicy gravy.***Unique Aspect: This dish showcases the ingenuity in Barishali cooking, turning the unique texture of Chitol fish into a delightful preparation.",
        type: "traditional Bengali dish"
    },
    {
        name: "Patla Khichuri",
        description: "A soupy version of khichuri made with rice, lentils, and vegetables, often served with fried fish or meat.***Comfort Food: This dish is a comforting meal, especially during rainy days.",
        type: "traditional Bengali dish"
    },
    {
        name: "Bager Chingri",
        description: "Large tiger prawns cooked with a rich blend of spices.***Highlight: The large prawns from the Sundarbans region near Barishal are especially prized for their size and flavor.",
        type: "traditional Bengali dish"
    },
    {
        name: "Mishti (Sweets)",
        description: "Popular Varieties: Rosogolla, Sandesh, and Chomchom.***Special Note: Barishal's sweets are renowned for their rich, creamy textures and perfect balance of sweetness where Gouranadi Mistannya Bhandar, Mithai Ghar,Haque Mistanno Bhandar,Sosi Mistanno Bhandar is highlighted shop for sweets.",
        type: "traditional Bengali functional Food"
    },
    {
        name: "Jhal Muri",
        description: "Puffed rice mixed with spices, mustard oil, chopped onions, green chilies, and sometimes raw mango.***Highlight: A popular street food snack, known for its spicy and tangy flavors.",
        type: "traditional Bengali Street food"
    },
    {
        name: "Chana Pora",
        description: "Roasted black chickpeas mashed with spices and mustard oil.***Highlight: Served as a snack or appetizer, offering a smoky and savory flavor.",
        type: "traditional Bengali Food"
    },
    {
        name: "Tok Doi",
        description: "Sweet and sour yogurt, flavored with tamarind or green mango pulp.***Highlight: Offers a refreshing contrast of flavors, served as a side dish or accompaniment to spicy meals.",
        type: "traditional Bengali Dish"
    },
    {
        name: "Bori Bhaja",
        description: " Sun-dried lentil dumplings fried until crispy.***Highlight: Adds a crunchy texture and protein-rich element to Bengali meals, often used in various dishes.",
        type: "traditional Bengali Zung food"
    },
    {
        name: "Chingri Bhorta",
        description: "Spicy mashed prawns mixed with onions, mustard oil, and green chilies.***Highlight: Provides a flavorful and spicy seafood dish, typically served with rice.",
        type: "traditional Bengali dish"
    },
    {
        name: "Kochu Bata",
        description: "Taro root mashed with mustard oil, green chilies, and spices.***Highlight: Offers a spicy and earthy flavor, often served as a side dish with rice.",
        type: "traditional Bengali dish"
    },
    {
        name: "Shorshe Bata Maach",
        description: "Fish (often carp or catfish) cooked in a spicy mustard seed paste.***Highlight: Known for its robust flavors and the unique pungency of mustard, a staple in Bengali households.",
        type: "traditional Bengali dish"
    },
    {
        name: "Aam Doi",
        description: "Mango-flavored yogurt, thickened and sweetened, served as a dessert.***Highlight: Represents the seasonal delight of mangoes in Bengali cuisine, enjoyed chilled during summer.",
        type: "traditional Bengali dish"
    },
    {
        name: "Pithe",
        description: "Various types of traditional Bengali sweets made from rice flour, often filled with coconut or jaggery.***Highlight: Celebrated during winter festivals like Poush Parbon for their sweetness and cultural significance.",
        type: "traditional Bengali Food"
    }
];

// Insert data into the database
HighlightedFoodservices.insertMany(highlightedFoodservices)
    .then(() => {
        console.log('highlighted food Services inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
