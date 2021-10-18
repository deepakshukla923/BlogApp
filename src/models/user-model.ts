import sequelize from "sequelize";
import { sequelizeConnection as db } from "../utils/database";

export const User = db.define('users',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: true,
                isLowercase: true,
                notEmpty: true,
            }    
        },
        password: {
            type: sequelize.STRING,
            allowNull: false,
        },
    },
);
