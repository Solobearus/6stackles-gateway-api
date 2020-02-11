var fetch = require('node-fetch');

const verify = (req, res, next) => {

    fetch(`http://localhost:${process.env.PORT_OF_AUTH_CONTROLLER}/verify`, {
        method: 'POST',
        body: JSON.stringify({
            token: req.body.token
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(result => result.json())
        .then(result => {
            if (result.err) {
                res.status(403).json({ err: "You are not authorized to perform this action. Please try to sign-in again." });
            } else {
                req.body.userId = result._id;
                next();
            }
        })
        .catch(err => res.status(403).json({ err: "You are not authorized to perform this action. Please try to sign-in again." }))
}

module.exports = verify;