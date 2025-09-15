const { cipher, decipher } = require('./encript.js');
const mongose = require('mongoose')
const ObjectId = mongose.Types.ObjectId;
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
    const token = req.headers?.authorization?.split(' ')[1];

    if (token) {
        const config = decipher(token)
        const sessionId = config.split(':')[0];
        const sessionToken = config.split(':')[1];
        const UserObjectId = new ObjectId(sessionId)
        const query = {
            "user_id": UserObjectId,
            "token": sessionToken

        }
        const session_selected = await SessionModel.findOne(query);
        if (session_selected) {
            next()
        } else {
            res.json({ "error": "SessionInvalid" })
        }

    } else {
        res.json({ "error": "TokenNotFound" })
    }
}

module.exports = {
    accessToken,
    authorizationToken
}