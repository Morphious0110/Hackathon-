import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res, next)=>{
    const{email, password, username} = req.body


    //bcryption added
    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        email,
        password: hashedPassword,
        username
    })
    try {
        await newUser.save()
        res.status(200).json({msg:"user created succefully"})
        
    } catch (error) {

        next(error)
        
    }

    
}