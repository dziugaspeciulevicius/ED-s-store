import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        // expiresIn: '15min' //expires in 15 minutes 
        expiresIn: '7d' 
    })
}

export default generateToken;