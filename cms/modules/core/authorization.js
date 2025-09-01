const { cipher } = require('./encript.js');
const SessionModel = require('../session/SessionModel.js');
const RandomString = require('./randomString.js');

const AccessToken = (id) => {
    const Session = new SessionModel({ user_id: id, token: RandomString() })
    const session_created = Session.save();
    if (session_created) {
        return cipher(Session.user_id + ":" + Session.token)
    } else {
        return null
    }
}

const AuthorizationToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    res.json({ token })
    if (token) {
        next()
    } else {
        res.json('TokenNotFound')
    }
}

module.exports = {
    AccessToken,
    AuthorizationToken
}