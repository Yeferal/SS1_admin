const Account = require('./Initialization/Account');
const Log = require('./Initialization/Log');
const User = require('./Initialization/User');
const Token = require('./Initialization/VerificationToken');

//Cuenta
Account.hasOne(User, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_cuenta',
        allowNull: false
    }
});

User.belongsTo(Account, { foreignKey: "id_cuenta" });
//Usuario

//Log
Account.hasMany(Log, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_cuenta',
        allowNull: false
    }
});

Log.belongsTo(Account, { foreignKey: "id_cuenta" });

//Token
Account.hasMany(Token, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'id_cuenta',
        allowNull: false 
    }
})