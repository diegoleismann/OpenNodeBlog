const { cipher } = require('./encript.js');
const SessionModel = require('../session/SessionModel.js');
const RandomString = require('./randomString.js');

const accessToken = (id) => {
    const Session = new SessionModel({ user_id: id, token: RandomString() })
    const session_created = Session.save();
    if (session_created) {
        return cipher(Session.user_id + ":" + Session.token)
    } else {
        return null
    }
}

const authorizationToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    res.json({ token })
}

module.exports = {
    accessToken,
    authorizationToken
}