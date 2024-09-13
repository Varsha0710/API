import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface accesslistAttributes {
    id?: number;
    staff_id: number;
    access_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface accesslistCreationAttributes extends Optional<accesslistAttributes, 'id'> {}

const accesslist = sequelize.define<Model<accesslistAttributes,accesslistCreationAttributes>>('accesslists', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    staff_id: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    access_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: true
});


export default accesslist;