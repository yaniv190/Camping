const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);
// now we can type for example :
/*const camp = new Campground({
    location: `${cities[random1000].city}, ${cities[random1000].state}`,
    title: `${sample(descriptors)} ${sample(places)}`
})*/

//await Campground.deleteMany({});
//Campground.findByIdAndDelete(id)