import bcrypt from "bcryptjs";
import { Error } from "../alert/Error";

export const hash = async password => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = bcrypt.hash(password, salt);
        return hashed;
    } catch (err){
        Error(err.message)
    }
};

export const compare = async  (password, hashed) => {
    try {
        const  compared = bcrypt.compare(password, hashed);
        return compared
    } catch (err) {
        Error(err.message)
    }
}
