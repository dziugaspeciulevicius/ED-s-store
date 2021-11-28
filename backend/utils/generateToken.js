import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2h", //expires in 15 minutes
    // expiresIn: "15min", //expires in 15 minutes
  });
};

export default generateToken;
