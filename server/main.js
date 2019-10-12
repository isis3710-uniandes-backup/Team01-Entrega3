import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/mongoSettings';
/*import './models'
const Event = require('mongoose').model('Event');
const User = require('mongoose').model('User');
const mongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://tutoFinder_admin:tutoFinder_password@cluster0-j6ym9.mongodb.net/test?retryWrites=true&w=majority";*/

Meteor.startup(() => {
  // code to run on server at startup
});
/*
let conn =  mongoClient.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .catch(error => {
        console.error(error);
    });


if (Meteor.isServer) {
    var Api = new Restivus({
        useDefaultAuth: true,
        prettyJson: true
    });

    Api.addRoute('user', {
        post: function () {
            return {status: 'success', data: {message: 'User Posted'}}
        },
        delete: {
            action: function () {
                return {status: 'success', data: {message: 'User removed'}}
            }
        }
    });
}*/
