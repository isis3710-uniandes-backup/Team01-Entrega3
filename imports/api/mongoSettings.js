import { Mongo } from 'meteor/mongo';

export const Users= new Mongo.Collection('usersCollection');
export const Events= new Mongo.Collection('events');
