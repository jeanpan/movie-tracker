var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

/**
 * USER data schema
 */

var userSchema = new mongoose.Schema({
    username: String,
    password: String,

    email: { type: String, unique: true }

    profile: {
        name: { type: String, default: '' },
        website: { type: String, default: '' },
        info: { type: String, default: '' },
        avatar: { type: String, default: '' },
        createDate: { type: Date, default: '' }
    }
});