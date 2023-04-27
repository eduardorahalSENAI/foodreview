import { Sequelize } from "sequelize"
import connection from "../config/db.js"
import Restaurant from "./Restaurant.js";
import User from "./User.js";

const Review = connection.define(
    'review',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idRestaurant: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'restaurants',
                key: 'id'
            }
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stars: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }
);

Review.belongsTo(Restaurant, {
    foreignKey: 'idRestaurant'
});

Review.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Review;

