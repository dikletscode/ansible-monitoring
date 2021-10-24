import jwt from "jsonwebtoken";

const createAccessToken = (id: string) => {
  return jwt.sign({ id: id }, process.env.SECRET_TOKEN, {
    expiresIn: "10h",
  });
};
export default createAccessToken;
