import staff from '../models/staff.model';
import accesslist from '../models/accesslist.model';
import access from '../models/access.model';
import { Op } from 'sequelize';

const createStaff = async (data: any) => {
    
    const staffDetail: any = await staff.create(data);
    const staffid = staffDetail.id;
    console.log(staffid);
  
    const accessobject=data.access
        for (const [key, value] of Object.entries(accessobject)) {
            if (value === true) {
              console.log(key);
              
              const accessnames: any=await access.findOne({ where: { access_Name: key } })
              const accessid=accessnames?.id
              const accesslistdata: any={staff_id:staffid,access_id:accessid??0}
              await accesslist.create(accesslistdata)
            }
          }
    return staffDetail;
}

const getStaffDetails = async (id: number) => {
    const staffDetails = await staff.findOne({
        where: { id },
        attributes: ['id', 'name', 'mobile_number', 'email_id', 'employee_code'],
        include: [
            {
                model: accesslist,
                attributes: ['id'],
                include: [
                {
                    model: access,
                    attributes: ['access_Name'],
                }
                ],
            }
        ]
    });
    return staffDetails;
}

const getAllStaffs = async (  page: number, limit: number, search?: string, sort?: number ) => {
 
    const offset = (page - 1) * limit;
    const whereCondition: any = {};
    whereCondition.status = { [Op.ne]: 4 };
  
    if (search) {
        whereCondition.name = {
          [Op.like]: `%${search}%` 
        };
    }
  
    const queryOptions: any = {
        where: whereCondition,
        attributes: ['id', 'name', 'mobile_number', 'email_id', 'employee_code', 'status'],
        limit,
        offset,
    };
  
    if (sort === 1 || sort === 0) {
        queryOptions.order = [['name', sort === 1  ? 'ASC' : 'DESC']];
    }

    const staffList = await staff.findAll(queryOptions);
    const totalStaffCount = await staff.count({ where: whereCondition });
  
    return {
        data: staffList,
        pagination: {
          total: totalStaffCount,
          page,
          limit,
          totalPages: Math.ceil(totalStaffCount / limit)
        }
    };
};

const updateStaff = async (id: number) => {
    const getstaffdetails: any = await staff.findByPk(id);
    return getstaffdetails.update({ status: 4 });
};

export const staffService = { createStaff, getStaffDetails, getAllStaffs, updateStaff };