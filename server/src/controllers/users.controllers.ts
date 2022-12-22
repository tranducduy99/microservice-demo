import { Request, Response } from "express";
import { User } from "../entities/User";
export const createUser = async (req: Request, res: Response) => {
    try {
        const {firstname, lastname} = req.body
        const user = new User();
        user.first_name = firstname;
        user.last_name = lastname;
        await user.save()
        res.json(user)
    } catch(error){
        if (error instanceof Error) {
            return res.status(500).json(({message: error.message}))
        }
    }
}
export const getUser = async(req: Request, res: Response) => {
    const users = await User.find();
    return res.json(users)
}