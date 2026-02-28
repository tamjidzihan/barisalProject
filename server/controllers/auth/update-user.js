const Account = require('../../models/Account');
const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {
    const { username, password } = req.body;
    const userId = req.auth.uid;

    try {
        const user = await Account.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (username) {
            const existingUser = await Account.findOne({ username, _id: { $ne: userId } });
            if (existingUser) {
                return res.status(400).json({ message: 'Username already taken' });
            }
            user.username = username;
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        await user.save();
        res.json({ message: 'User updated successfully', data: { _id: user._id, username: user.username, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = updateUser;
