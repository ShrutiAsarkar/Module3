const User = require('../models/users');

exports.list = (req, h) => {
    return User.find({}).exec().then((user) => {

        return { users: user };

    }).catch((err) => {

        return { err: err };

    });
}

/**
 * Get User by ID
 */
exports.get = (req, h) => {

    return User.findById(req.params.id).exec().then((user) => {

        if(!user) return { message: 'User not Found' };

        return { user: user };

    }).catch((err) => {

        return { err: err };

    });
}


/**
 * POST a User
 */
exports.create = (req, h) => {

    const userData = {
        name: req.payload.name,
        email: req.payload.email,
        contactno: req.payload.contactno,
        password: req.payload.password
    };

    return User.create(userData).then((user) => {

        return { message: "User Account is created successfully", user: user };

    }).catch((err) => {

        return { err: err };

    });
}

/**
 * PUT | Update user by ID
 */
exports.update = (req, h) => {

    return User.findById(req.params.id).exec().then((user) => {

        if (!user) return { err: 'User does not found' };
        name: req.payload.name;
        email: req.payload.email;
        contactno: req.payload.contactno;
        password: req.payload.password;

        user.save(userData);

    }).then((data) => {

        return { message: "Data of User is updated successfully" };

    }).catch((err) => {

        return { err: err };

    });
}

/**
 * Delete User by his ID
 */
exports.remove = (req, h) => {

    return User.findById(req.params.id).exec(function (err, user) {

        if (err) return { dberror: err };
        if (!user) return { message: 'User does not found' };

        user.remove(function (err) {
            if (err) return { dberror: err };

            return { success: true };
        });
    });
}