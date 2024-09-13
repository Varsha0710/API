import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import accesslist from "./accesslist.model";

interface staffAttributes { 
    id?: number;
    name: string;
    mobile_number: bigint;
    email_id: string;
    employee_code: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface  staffCreationAttributes extends Optional<staffAttributes, 'id'> {}

const staff = sequelize.define<Model<staffAttributes,staffCreationAttributes>>('staffs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobile_number:{
        type: DataTypes.BIGINT,
        allowNull:false,
      },
      email_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employee_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
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

staff.hasMany(accesslist, { foreignKey: 'staff_id' });
accesslist.belongsTo(staff, { foreignKey: 'staff_id' });

export default staff;