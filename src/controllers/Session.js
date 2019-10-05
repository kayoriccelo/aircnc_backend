const User = require('../models/User');


module.exports = {
    // store - "created"
    async store(req, res) {
        const { email } = req.body;

        console.log(email)

        const user = await User.create({
            email
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));

        return res.json(user);
    }
};
