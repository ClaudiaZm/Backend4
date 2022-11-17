import jwt from "jsonwebtoken"
export const generateToken=(payload)=>{
    try {
        const token=jwt.sign(payload,"abc1234",{
            expiresIn:"30d",
        });
        return token;
    } catch (error) {
        console.log("error en generateToken", error.message)
    }
}