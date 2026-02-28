const Account = require('../../models/Account');

const updateRole = async (req, res) => {
    const { userId, role } = req.body;

    if (!['user', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }

    try {
        const user = await Account.findByIdAndUpdate(userId, { role }, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'Role updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = updateRole;
