import { Request, Response } from 'express';
import { staffService } from '../services/staffService';

const createStaff = async (req: Request, res: Response) => {
    try {
        const staffDetail = await staffService.createStaff(req.body);
        res.status(201).json(staffDetail);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

const getStaffDetail = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const staffDetails = await staffService.getStaffDetails(id);
        if (staffDetails) {
            res.status(200).json(staffDetails);
        } else {
            res.status(404).json({ message: 'Staff not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

const getAllStaff = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = req.query.search as string | undefined;
        const sort = req.query.sort ? parseInt(req.query.sort as string, 10) : undefined;

        if (sort !== undefined && sort !== 1 && sort !== 0) {
            return res.status(400).json({ error: "Invalid sort value. Allowed values are 1 (ASC) or 0 (DESC)." });
        }
        
        const staffList = await staffService.getAllStaffs(page, limit,search, sort);
        res.status(200).json(staffList);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

const updateStaff = async (req:Request,res:Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        await staffService.updateStaff(id)
        res.status(200).json({message :"Staff deleted"});
    }
    catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const staffController = { createStaff, getStaffDetail, getAllStaff, updateStaff };