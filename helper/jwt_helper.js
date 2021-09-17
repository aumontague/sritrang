const jwt = require('jsonwebtoken');
const createError = require('http-error');
const { reject } = require('lodash');

module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {
                id: userId
            }

            const secret = "tokenSritrang";
            const options = {
                expiresIn: '1h'
            }

            jwt.sign(payload, secret, options, (err, token) => {
                if(err) reject(err);
                resolve(token)
            })
        })
    }
}