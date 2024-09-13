import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import accesslist from "./accesslist.model";

interface accessAttributes {
    id?: number;
    access_Name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface accessCreationAttributes extends Optional<accessAttributes, 'id'> {}

const access = sequelize.define<Model<accessCreationAttributes,accessAttributes>>('accesses',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    access_Name: {
        type:DataTypes.STRING,
        allowNull: false,
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

access.hasMany(accesslist, { foreignKey: 'access_id' });
accesslist.belongsTo(access, { foreignKey: 'access_id' });

export default access;