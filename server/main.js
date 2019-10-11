import { Meteor } from 'meteor/meteor';
import './models'
const Event = require('mongoose').model('Event');
const User = require('mongoose').model('User');

Meteor.startup(() => {
  // code to run on server at startup
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
}
