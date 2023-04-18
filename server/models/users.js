const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    // preserves user entered capitalization
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    unique_username: {
        type: DataTypes.STRING,
        // unique users only
        unique: true,
        validate: {
            len: [1],
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // requires password to have one digit, one lowercase, one uppercase, and be at least 8 characters long
            is: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        },
    },
});

const Users = model('Profile', profileSchema);

module.exports = Profile;


