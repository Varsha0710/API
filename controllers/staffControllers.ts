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
        const status = req.query.status ? parseInt(req.query.status as string) : undefined;
        const search:any = req.query.search ;
        const sortAsc = req.query.sortAsc === '1';
        
        const staffList = await staffService.getAllStaffs(page, limit, status,search, sortAsc);
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