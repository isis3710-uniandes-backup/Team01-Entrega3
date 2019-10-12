import { Mongo } from 'meteor/mongo';

export const Users= new Mongo.Collection('users');
export const Events= new Mongo.Collection('events');
