import { Request ,Response} from "express";
import {getRepository} from "typeorm";
import {Reset} from "../entity/reset.entity";
import {createTransport} from "nodemailer";
import {User} from "../entity/user.entity";
import bcryptjs from "bcryptjs";

export const Forgot = async (req:Request ,res:Response) => {
    const {email} = req.body;
    const token = Math.random().toString(20).substring(2,12)

    await getRepository(Reset).save({
        email,
        token
    })
    const transporter = createTransport({
        host:'0.0.0.0',
        port: 1025
    })
     const url = `http://localhost:3000/reset/${token}`;

    await transporter.sendMail({
        from:"contact@example.com",
        to:email,
        subject:"Reset your password!",
        html:`Click <a href="${url}">HERE</a> to reset your password.`
    })
    res.send({
        message:"Check Your email please"
    })
}

    export const ResetPassword = async (req:Request , res:Response) => {
        const {token ,password,confirm_password } = req.body;
        if (password !== confirm_password) {
            return res.status(400).send({
                message: "password dont match !"
            })
        }

        const resetPassword = await getRepository(Reset).findOne({token});
        if(!resetPassword){
            return res.status(400).send({
                message:"invalid Link!"
            })

        }
        const user = await getRepository(User).findOne({email:resetPassword.email})
            if(!user){
                return res.status(404).send({
                    message:"invalid Link!"
                })
            }
            await getRepository(User).update(user.id,{
                password:await bcryptjs.hash(password,12)
            });
            res.send({
                message:"Success!"
            })
    }
