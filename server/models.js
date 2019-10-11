var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    address: {type: String, required: true},
    category: {type: String}
});

var userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String},
    lastname: {type: String},
    password: {type: String, required: true},
    offersevents: {type: [eventSchema]},
    subscribedevents: {type: [eventSchema]}
});

module.exports = mongoose.model('Event', eventSchema);
module.exports = mongoose.model('User', userSchema);
