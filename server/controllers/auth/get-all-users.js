const Account = require('../../models/Account');

const getAllUsers = async (req, res) => {
    try {
        const users = await Account.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getAllUsers;
